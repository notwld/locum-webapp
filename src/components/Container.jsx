
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Container({ content }) {
    return (
        <div className="row w-100 pt-3 px-5 m-0 register" style={{background:"rgba(153, 204, 67)"}}>
            <div className="col">
                <img src={content.image} alt="" className="d-block w-70 img-fluid" />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
                <h1 className='py-3' style={{color:"white",textAlign:"left!important"}}>{content.heading}</h1>
                <p style={{color:"white"}}>{content.caption}</p>
                <Link className="btn btn-primary my-3 px-4 py-2" style={{backgroundColor:"#1e90cf",border:"none"}} to={"/contact"}>Register Now
                </Link>
            </div>
        </div>
    );
}

Container.propTypes = {
    content: PropTypes.shape({
        image: PropTypes.any.isRequired,
            heading: PropTypes.string.isRequired,
            caption: PropTypes.string.isRequired,
    }).isRequired,
};
