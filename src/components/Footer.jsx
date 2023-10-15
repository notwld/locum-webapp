
import PropTypes from 'prop-types';
import "../stylesheets/footer.css"

export default function Footer({ about, contact }) {
    return (
        <footer className="px-5 py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About Us</h4>
                        <p style={{fontSize:"0.8rem"}}>{about}</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li className='link py-2 my-2 px-2'><a href="#">Home</a></li>
                            <li className='link py-2 my-2 px-2'><a href="#">About Us</a></li>
                            <li className='link py-2 my-2 px-2'><a href="#">Services</a></li>
                            <li className='link py-2 my-2 px-2'><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li><i className="fa fa-map-marker"></i> {contact.address} </li>
                            <li><i className="fa fa-phone"></i> {contact.phone} </li>
                            <li><i className="fa fa-envelope"></i> {contact.email} </li>
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

