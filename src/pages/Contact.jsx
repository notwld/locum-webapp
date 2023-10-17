import bush from "../assets/bush.png"
import map from "../assets/map.jpg"
import Banner from "../components/Banner"
import Form from "../components/Form"
export default function Contact() {
  return (
    <div className="container-fluid d-flex column justify-content-center align-items-center" style={{ background: `url(${bush})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="container px-0 mb-5" style={{ backgroundColor: "white", borderRadius: "7px", marginTop: "100px" }} >
        <Banner text="Contact Us" />
        <div className="container-fluid py-5 w-100">
          <div className="row mx-3 my-5">
            <div className="col-md-6 my-5">
              <div >
                <h1 className='text-center'>How to reach us?</h1>
                <div className="row my-5">

                  <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <h5>
                      CALL US
                    </h5>

                    <span>
                    +44 7578617902
                    </span>
                  </div>

                </div>
                <div className="row my-5">

                  <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <h5>
                      EMAIL US
                    </h5>

                    <span>
                    admin@locumforce.co.uk
                    </span>
                  </div>

                </div>
                <div className="row my-5">

                  <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                    <h5>
                      FIND US
                    </h5>

                    <span>
                    208 Roundhay Road, Leeds, LS8 5AA

                    </span>
                  </div>

                </div>

              </div>
            </div>
            <div className="col-md-6 my-5">
              <div className="card">
                <img src={map} alt="Picture" />
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}
