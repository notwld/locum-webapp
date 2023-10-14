import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
        }
      ]
    },
    
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
