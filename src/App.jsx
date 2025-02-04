import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import First from './components/first/First.jsx'
import About from './components/about/About.jsx'
import Home from './components/home/Home.jsx'
// import { createContext } from 'react'
function App() {
  const [latestUser, setLatestUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <First latestUser={latestUser} setLatestUser={setLatestUser}/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])

  return (

    < RouterProvider router={router} />
  )
}
export default App
