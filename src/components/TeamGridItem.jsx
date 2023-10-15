
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function TeamGridItem({
        image, name, position, experience
}) {
    return (
        <div className="col text-center d-flex flex-column justify-content-center align-items-center p-3 mx-3" style={{backgroundColor: '#f8f9fa',boxShadow: '0.1px 2px 0.1px 0.1px rgba(0, 0, 0, 0.1)'
        , borderRadius: '10px'}}>
            <img src={image} alt="" className="d-block w-70 rounded-circle" />
            <h3 className='my-2'>
                {name}
            </h3>
            <p>
                <FontAwesomeIcon icon={faBriefcase} /> {position} | {experience} Years of <br/> Experience
            </p>
        </div>
    )
}

TeamGridItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired
}

