import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import First from './components/first/First.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx' 
import { createContext } from 'react'

// export const QuizContext = createContext({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
