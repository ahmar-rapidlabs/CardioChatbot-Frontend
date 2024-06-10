import { useState } from 'react'
import './App.css'
import Nav from './components/Navbar/nav'
import HeroSection from './components/heroSection/heroSection'
import Footer from './components/footer/footer'
import Chatbot from'./components/chatbot/chatbot'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {path: '', element: <><Nav /><HeroSection/><Footer/></>},
    {path: '/chatbot', element: <><Chatbot/></>},
    {path: '/api', element: <><Footer /></>},


  ])
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={router} />

    
    </>
  )
}

export default App
