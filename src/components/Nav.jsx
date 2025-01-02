import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css';
import img1 from '../assets/logo.png';

function Nav() {
    return (
        <nav>
            <a href="#home">
                <img src={img1} alt="" />
            </a>
            <div className="box">
                <a href="">Buy / Sell</a>
                <a href="">Grow</a>
                <a href="">Markets</a>
                <a href="">Business</a>
                <a href="">Support</a>
            </div>
            <div className="box2">
                <button className="btn1 btn btn-outline-light">Sign in</button>
                <button className='btn2 btn btn-outline-light'>Sign up</button>
            </div>
        </nav>
    );
}

export default Nav;