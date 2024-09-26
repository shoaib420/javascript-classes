import React from 'react'
// import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
// import Login from './component/Login'
import Signup from './component/Register/Signup'
import Login from './component/Register/Login'
import ProtecteRoute from './protecteRoute/ProtecteRoute'
import Addproduct from './component/Addproduct/Addproduct'
import Updateproduct from './component/updateProduct/updateproduct'
import Mystate from './context/data/Mystate'


 const App = () => {
  return (
    <div>
  {/* <Navbar /> */}
  <Mystate>
  <Routes>
    <Route path="/"  element={ 
      <ProtecteRoute>
        <Home />
      </ProtecteRoute>
      } />
    <Route path="/login"  element={<Login />} />
    <Route path="/signup"  element={<Signup />} />
    <Route path="/addproduct"  element={<Addproduct />} />
    <Route path="/updateproduct"  element={<Updateproduct />} />
  </Routes>
  </Mystate>
    </div>
  )
}
export default App