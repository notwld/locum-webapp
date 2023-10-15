import GridItem from './FeatureGridItem';
import PropTypes from 'prop-types';

export default function Grid({ features }) {
    return (
        <div className="container text-center my-3">
            <div className="row">

                {features.map((feature, index) => (
                    <GridItem icon={feature.icon} heading={feature.heading} caption={feature.caption} key={index} />
                ))}

            </div>
        </div>
    )
}

Grid.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.any.isRequired,
            heading: PropTypes.string.isRequired,
            caption: PropTypes.string.isRequired,
        })
    ).isRequired,
};
