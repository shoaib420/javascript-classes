import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Order from './Pages/order/oder'
import Cart from './Pages/Cart/Cart';
import Error from './Pages/Error/Error'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Error' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App