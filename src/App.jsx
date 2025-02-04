import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import First from './components/first/First'
import About from './components/about/About'
import Home from './components/home/Home'

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
