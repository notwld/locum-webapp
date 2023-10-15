import PropTypes from 'prop-types'
import '../stylesheets/carousel.css'
import { useState, useEffect } from 'react';


export default function Carousel({ sliderObj }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === sliderObj.length - 1 ? 0 : activeIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, sliderObj.length]);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? sliderObj.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === sliderObj.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {sliderObj.map((item, index) => (
          <div className={index === activeIndex ? 'carousel-item active' : 'carousel-item'} key={index}>
            <img src={item.img} className="d-block w-100 carousel-img" alt="..."/>
            <div className="carousel-caption d-md-block">
              <div className="overlay"></div>
              <h5>{item.heading}</h5>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev" onClick={handlePrevClick}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next" onClick={handleNextClick}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

Carousel.propTypes = {
  sliderObj: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.any.isRequired,
      heading: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};


