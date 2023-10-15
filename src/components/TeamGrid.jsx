
import PropTypes from 'prop-types';
import TeamGridItem from './TeamGridItem';

export default function TeamGrid({ teamContent }) {
    return (
        <div className="row mx-0 my-5">
            {teamContent && teamContent.map((team, index) => (
                <TeamGridItem image={team.image} name={team.name} position={team.position} experience={team.experience} key={index} />
            ))}
        </div>
    );
}

TeamGrid.propTypes = {
    teamContent: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            experience: PropTypes.string.isRequired,
        })
    ).isRequired,
};
