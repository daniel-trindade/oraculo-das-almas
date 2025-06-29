import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// 1. Importe os componentes que farão parte das rotas
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Heros from './pages/Heros.jsx'
import Artifacts from './pages/Artifacts.jsx'
import Equips from './pages/Equips.jsx'
import Events from './pages/Events.jsx'
import Runes from './pages/Runes.jsx'
import AboutUs from './pages/AboutUs.jsx'




// 2. Defina o objeto de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "heros",
        element: <Heros />,
      },
      {
        path: "artifacts",
        element: <Artifacts />,
      },
      {
        path: "equips",
        element: <Equips />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "runes",
        element: <Runes />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)