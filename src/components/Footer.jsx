
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../stylesheets/footer.css"

export default function Footer({ about, contact }) {
    return (
        <footer className="px-5 py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p className='my-3' style={{fontSize:"0.8rem"}}>{about}</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li className='link py-2 my-3 px-2'><a href="#">Home</a></li>
                            <li className='link py-2 my-3 px-2'><a href="#">About Us</a></li>
                            <li className='link py-2 my-3 px-2'><a href="#">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li className='py-2 my-3 px-2'><FontAwesomeIcon icon={faMapMarker} /> {contact.address}</li>
                            <li className='py-2 my-3 px-2'><FontAwesomeIcon icon={faPhone} /> {contact.phone}</li>
                            <li className='py-2 my-3 px-2'><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    about: PropTypes.string.isRequired,
    contact: PropTypes.object.isRequired,
};

