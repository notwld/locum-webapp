import Banner from '../components/Banner';
import SocialGrid from '../components/SocialGrid';
const style = {
    background: `url("https://www.toptal.com/designers/subtlepatterns/uploads/moroccan-flower-dark.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}

const about ="Locumforce is a platform that connects locum doctors with medical practices. We aim to provide a seamless experience for both doctors and practices. We are a team of doctors and engineers who arepassionate about improving the healthcare system in UK."

export default function About() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" style={style}>
      <div className="container mx-5 mb-5 pb-5 px-0" style={{backgroundColor:"white",borderRadius:"7px",marginTop:"100px"}}>
        <Banner text="About Us" />
        <p className="text-center px-5 py-3">
            {about}
        </p>
        <h1 className='text-center my-4' style={{color:"#1e90cf"}}>
            #Connect with us
        </h1>
        <SocialGrid />
      </div>
    </div>
  )
}
