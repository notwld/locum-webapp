
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const accounts = [
    {
        icon: faFacebook,
        caption: "Facebook",
        link: "https://www.facebook.com/locumforce",
    },
    {
        icon: faTwitter,
        caption: "Twitter",
        link: "https://twitter.com/locumforce",
    },
    {
        icon: faInstagram,
        caption: "Instagram",
        link: "https://www.instagram.com/locumforce/",
    },
    {
        icon: faLinkedin,
        caption: "Linkedin",
        link: "https://www.linkedin.com/company/locumforce/",
    },

]
export default function SocialGrid() {
    return (
        <div className="row mx-0">
            {accounts.map((account, index) => (
                <div className="col text-center" key={index}>
                    <div className="grid-card px-3 py-2">
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
