import { Outlet } from "react-router-dom"
import Navbar from "./components/Nav"
import Footer from "./components/Footer"


const about =
  "Locum Force are a specialist consultancy, having initially specialised in the pharmacy recruitment market we now specialise in the delivery of consultancy services to our client base ranging from public & private sector pharmacies, pharmaceutical firms, specialist robotics and chemical manufacturing. With an exceptionally broad range of international clients we deliver innovative services including recruitment, sourcing, branding and service matching.";

const contact = {
  address: "208 Roundhay Road, Leeds, LS8 5AA",
  phone: "+44 7578617902",
  email: "admin@locumforce.co.uk"
}


function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer  about={about} contact={contact}/>
    </>
  );
}

export default App;


