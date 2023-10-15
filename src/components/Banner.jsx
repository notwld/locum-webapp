
import PropTypes from 'prop-types';
import img from "../assets/slider/slider_2.jpg"
import { useState } from 'react';
import { useEffect } from 'react';


const style = {
    height: "160px",
    background: `url(${img})`,
    margin:"0px!important",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: 1,

}

const overlay = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "160px",
    width: "100%",
    zIndex: 99,
}



export default function Banner({text}) {
    const [path,setPath] = useState("home");
    useEffect(() => {
        setPath(window.location.pathname.split("/")[1])
    }, [])
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center text-center" style={style}>
            <div style={{...overlay, backgroundColor: path === "" ? "rgba(153, 204, 67, 0.7)" : "rgb(30, 144, 207,0.7)"}}></div>
            <h1 className='text-center' style={{color:"white",zIndex:9999}}>{text}</h1>
        </div>
    )
}

Banner.propTypes = {
    text: PropTypes.string.isRequired,
};