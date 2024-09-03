import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <BrowserRouter>

// <Routes>
//   <Route path='/' element={<Home />} />
//   <Route path='/About' element={<About />} />
//   <Route path='/Contact' element={<Contact />} />
// </Routes>
//   </BrowserRouter>
    
//   </StrictMode>,
// )
//   function Home(){
//   return <h1>hello world </h1>
// }

//   function About(){
//   return <h1>hello world About </h1>
// }

//   function Contact(){
//   return <h1>hello world contact- </h1>
// }
