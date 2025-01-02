import React, { useState } from'react';
import '../Styles/Invests.css';
import img1 from '../assets/zashita.png';
import img2 from '../assets/bg-img2.png';
import img3 from '../assets/star-img(3).png';
import img4 from '../assets/bg-gradient-img.png';
import img5 from '../assets/Group 2.png';

function Invests() {
    return ( 
        <div className="Invests">
            <img src={img2} alt="" className='bgImg2'/>
            <img src={img3} alt="" className='star3'/>
            <div className="bgGradientImg"></div>
            <div className="bgGradientImg2"></div>
            <div className="group2"></div>
            <h2>A crypto investment platform <br /> that invests in you </h2>
            <p>We invest more resources than any other platrom in making sure great <br /> support from real people is a click away, whenever you need it.</p>
            <button className="btn btn-outline-light">Get Started</button>
            <div className="box">
                <div className="left">
                    <img src={img1} alt="" />
                </div>
                <div className="right">
                    <h2>24/7 access to full service customer support</h2>
                    <p>We invest more resources than any other platform in making sure great support from real people is a click away, whenever you need it.</p>
                    <button className='btn btn-outline-light'>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Invests;