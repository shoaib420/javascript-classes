import React from 'react'
// import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
// import Login from './component/Login'
import Signup from './component/Register/Signup'
import Login from './component/Register/Login'
import ProtecteRoute from './protecteRoute/ProtecteRoute'


 const App = () => {
  return (
    <div>
  {/* <Navbar /> */}
  <Routes>
    <Route path="/"  element={ 
      <ProtecteRoute>
        <Home />
      </ProtecteRoute>
      } />
    <Route path="/login"  element={<Login />} />
    <Route path="/signup"  element={<Signup />} />
  </Routes>
    </div>
  )
}
export default App