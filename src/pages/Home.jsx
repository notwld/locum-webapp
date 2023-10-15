import Crousel from "../components/Carousel";
import slider1 from "../assets/slider/slider_1.jpg";
import slider2 from "../assets/slider/slider_2.jpg";
import slider3 from "../assets/slider/slider_3.jpg";
import slider4 from "../assets/slider/slider_4.jpg";

import doctor from "../assets/doctor.png";

import team1 from "../assets/team/team-memb1.jpg";
import team2 from "../assets/team/team-memb2.jpg";
import team3 from "../assets/team/team-memb3.jpg";
import team4 from "../assets/team/team-memb4.jpg";


import "../stylesheets/home.css"
import Grid from "../components/FeatureGrid";

import { faHospital, faUserMd, faMedkit } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import Banner from "../components/Banner";
import Container from "../components/Container";
import TeamGrid from "../components/TeamGrid";
import SocialGrid from "../components/SocialGrid";


const sliderObj = [
    {
        img: slider1,
        heading: "LocumForce",
        caption: "Some representative placeholder content for the first slide.",
    },
    {
        img: slider2,
        heading: "LocumForce",
        caption: "Some representative placeholder content for the second slide.",
    },
    {
        img: slider3,
        heading: "LocumForce",
        caption: "Some representative placeholder content for the third slide.",
    },
    {
        img: slider4,
        heading: "LocumForce",
        caption: "Some representative placeholder content for the fourth slide.",
    },
];

const features = [
    {
        icon: faHospital,
        heading: "Expert Sourcing",
        caption: "Our solutions are trusted by some of the world's largest organizations. We provide highly trained individuals who support you when all else fails.",
    },
    {
        icon: faMedkit,
        heading: "Global Reach",
        caption: "Our capabilities stretch across 5 time zones. We work with clients ranging from global pharmacies to chemical manufacturers and pharmaceutical firms.",
    },
    {
        icon: faUserMd,
        heading: "Tailored Outsourcing",
        caption: "We believe in providing innovative, tailored solutions for our clients. Our technology-driven consultancy can provide anything you need.",
    }
    
];

const containerContent = {
    image: doctor,
    heading: "Why Register with Us?",
    caption: "As a leading provider of locum staff to both the NHS and private sectors, we are committed to providing you with the best staff for your needs. Our team of experienced professionals understands the unique needs of our clients and is dedicated to delivering the highest quality service. With over 10 years of experience in the industry, we have built an excellent reputation for reliability and professionalism. Our extensive database of locum staff is available at short notice, ensuring that we can always find the right person for your needs. Contact us today to learn more about how we can help you find the perfect locum staff for your organization."

}

const teamContent = [
    {
        image: team1,
        name: "Dr. John",
        position: "Surgeon",
        experience: 10
    },
    {
        image: team2,
        name: "Dr. Mary",
        position: "Nurse",
        experience: 10
    },
    {
        image: team3,
        name: "Dr. Eva",
        position: "Pharmacist",
        experience: 10
    },
    {
        image: team4,
        name: "Dr. Christine",
        position: "Doctor",
        experience: 10
    },
]

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


export default function Home() {
    return (
        <div>
            <Crousel sliderObj={sliderObj} />
            <div className="container-fluid pt-5 px-0 mx-0">
                <Banner text="#Our Key Features" />
                <Grid features={features} />
            </div>
            <div className="container-fluid px-0 mx-0">
                <Container content={containerContent} />
            </div>
            <div className="container-fluid pt-4 px-0 mx-0 my-5">
                <h2 className="text-center" >
                    Meet our Team
                </h2>
                <p className="text-center">
                    Here are our innovative and experienced team members
                </p>
                <TeamGrid teamContent={teamContent} />
            </div>
            <div className="container-fluid py-2 px-0 mx-0 my-5">
                <Banner text="#Find Us" />
                <SocialGrid accounts={accounts} />
            </div>
        </div>
    )
}
