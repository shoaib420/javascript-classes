import React from 'react'
import Nav from "./Nav"
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'

const App = () => {
  return (
    <div>
      <Nav />
      <Router>
      <Routes>
        <Route path="/Home"  element={<Home />} />

        <Route path="/about"  element={<About />} />

      </Routes>
</Router>
    </div>
  )
}

export default App