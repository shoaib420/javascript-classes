import React from 'react'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink> <br /> 
      <NavLink to="/contact">contact</NavLink> <br /> 
      <NavLink to="/about">About</NavLink> <br />
    </div>
  )
}

export default Navber