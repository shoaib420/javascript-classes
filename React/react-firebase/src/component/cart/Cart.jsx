import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const getProduct = async()=>{
        setLoading(true)
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json()
           setProduct(data);
           setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }

    }

        console.log(product);

    useEffect(() => {
    
     getProduct()
     
    }, [])
    

  return (
      <div>
          <div>
              <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
              {product.map((item, index)=>{
                    const {title , image, category, price , rating  } =  item;
                return(
                   <div >
                   <Card key={index} style={{ width: '20rem' }}>
                      <Card.Img variant="top" src={image} />
                      <Card.Body>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>
                             {category}
                          </Card.Text>
                          <Card.Title>{price}</Card.Title>
                          <Card.Title>{rating.rate}</Card.Title>
                          <Button variant="primary" style={{width:"100%"}}>Go somewhere</Button>
                      </Card.Body>
                  </Card>
                   </div>
                )

                })
              }
                  
              </div>
          </div>
      </div>
  )
}

export default Cart