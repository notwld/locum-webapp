import { useState, useEffect } from 'react';
import '../stylesheets/nav.css';
import { Link } from 'react-router-dom';
// import logo from "../assets/logo.png"
export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scroll ? 'scrolled' : ''}`} style={{ backgroundColor: scroll ? '#ffffff' : 'transparent',height:"fit-content" }}>
      <div className="container-fluid">
        <a className="navbar-brand" to="/" style={{ float: 'right', fontSize: scroll ? '1.5rem' : '2rem' ,backgroundColor:"white",marginTop:"0px!important"}}>
            {/* <img src={logo} alt="Logo" width="150" height="100" className="d-inline-block align-text-top"/> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent" style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
        }}>
          <ul className="navbar-nav mb-2 py-3 mb-lg-0" style={{ textAlign: 'right!important',justifyContent: 'center',alignItems: 'center', }}>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/" style={{ color: scroll ? '#000000' : '#ffffff'}}>
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="#" style={{ color: scroll ? '#000000' : '#ffffff'}}>
                About Us
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/menu" style={{ color: scroll ? '#000000' : '#ffffff'}}>
                Jobs
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="about-us" style={{ color: scroll ? '#000000' : '#ffffff'}}>
                Gallery
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${scroll ?null :"contact"} px-4 py-3`} to="contact-us" style={{ color: scroll ? '#000000' : '#ffffff'}}>
                Contact Us
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}
