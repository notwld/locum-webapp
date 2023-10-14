import { Outlet } from "react-router-dom"
import Navbar from "./components/Nav"

function App() {

  return (
    <>
    <Navbar/>
     <Outlet />
    </>
  )
}

export default App
