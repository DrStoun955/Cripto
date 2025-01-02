import React from "react";
import "../Styles/Footer.css";
import arrow from "../assets/arrow3.png";
import logo from "../assets/logo(1).png";
import img1 from "../assets/footer-bg.png";
import img2 from "../assets/footer-img.png";


function Footer() {
    return (
        <div className="end-div">
            <div className="footer-bg"></div>
            <img src={img2} alt="" className="footer-img" />
            <div className="box">
                <h2>Receive transmissions</h2>
                <p>Unsubscribe at any time. <span>Privacy policy↗</span></p>
                <div className="inpdiv">
                    <div className="inpdiv2">
                        <input type="email" placeholder="Email Address" className="email-input" />
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>

            <hr />


            <footer>
                <div className="left">
                    <img src={logo} alt="logo" className="logo" />
                    <p>
                        CoinFlip, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card, or bank transfer.
                        <br />
                        <br />
                        Sign up to get the latest in CoinFlip news, discounts, and more.
                    </p>
                    <div className="inpdiv">
                        <div className="inpdiv2">
                            <input type="email" placeholder="Email Address" className="email-input" />
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <p>© 2021 GPD Holdings, LLC FinCEN MSB</p>
                </div>
                <div className="center">
                    <p>Company</p>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>News</p>
                    <p>Merch</p>
                </div>
                <div className="right">
                    <p>Privacy Policy and Terms of Service</p>
                    <p>CoinFlip Privacy Policy</p>
                    <p>CoinFlip Biometrics Privacy Policy</p>
                    <p>CoinFlip Financial Privacy Notice</p>
                    <p>CoinFlip Terms of Service</p>
                    <p>CoinFlip Trade Desk Terms of Service</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;