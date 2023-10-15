import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'
export default function GridItem({icon, heading, caption}) {
    return (
        <div className="col py-3">
            <div className="grid-card px-3 py-5">
                <FontAwesomeIcon icon={icon} size="3x" color='green' className='py-2' />
                <h5 className='py-2'>{heading}</h5>
                <p className='pb-2'>{caption}</p>
            </div>
        </div>
    )
}

GridItem.propTypes = {
    icon: PropTypes.any.isRequired,
    heading: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};