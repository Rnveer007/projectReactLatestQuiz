import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import First from './components/first/First.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
import Quiz from './components/quizSection/Quiz.jsx'
// import { createContext } from 'react'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <First/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/quizSection',
          element: <Quiz />
        }
      ]
    }
  ])

  return (

    < RouterProvider router={router} />
  )
}
export default App
