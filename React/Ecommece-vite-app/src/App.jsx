import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Order from './Pages/order/oder'
import Cart from './Pages/Cart/Cart';
import Error from './Pages/Error/Error'
import MyState from './Context/data/MyState';

const App = () => {
  return (
    <div>
    <MyState>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/error' element={<Error />} />
      </Routes>
      </MyState>
    </div>
  )
}

export default App