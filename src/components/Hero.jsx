import React from "react";
import "../Styles/Hero.css";
import img1 from "../assets/Hero/Bitcoin-1.png";
import img2 from "../assets/Hero/star-img (1).png";
import img3 from "../assets/Hero/sphere.png";
import img4 from "../assets/Hero/LiteCoin-1.png";
import img5 from "../assets/Hero/Monero-2 copy 2.png";
import img6 from "../assets/Hero/star-img (2).png";
import img7 from "../assets/Hero/star-img (3).png"
import img8 from "../assets/Hero/Etherium-2.png";
import img9 from '../assets/circles.png';

function Hero() {
    return (
        <>
            <div className="Hero">
                <img src={img1} alt="" className="Bitcoin" />
                <img src={img2} alt="" className="Star8" />
                <img src={img3} alt="" className="Sphere" />
                <img src={img4} alt="" className="LiteCoin" />
                <img src={img5} alt="" className="Monero" />
                <img src={img6} alt="" className="Star4" />
                <img src={img7} alt="" className="Star6" />
                <img src={img8} alt="" className="Etherium" />
                <img src={img9} alt="" className='circles' />
                <div className="gradient1"></div>
                <h1>We make crypto <br /> clear and simple</h1>
                <p>Buy, sell, and grow your crypto with CoinFlip, the platform dedicated <br /> to every trader at every level.</p>
                <button className="btn btn-outline-light">Get Started</button>
            </div>
        </>
    );
}

export default Hero;