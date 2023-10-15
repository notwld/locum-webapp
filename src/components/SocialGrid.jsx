
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function SocialGrid({accounts}) {
    return (
        <div className="row mx-0">
            {accounts.map((account, index) => (
                <div className="col py-3 text-center" key={index}>
                    <div className="grid-card px-3 py-5">
                        <a href={account.link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={account.icon} size="3x" color="black" className='py-2' />
                        <p className="pb-2">{account.caption}</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

SocialGrid.propTypes = {
    accounts: PropTypes.array.isRequired
};
