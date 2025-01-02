import React from'react';
import '../Styles/Trade.css';
import img1 from '../assets/img.png';
import img2 from '../assets/img(1).png';
import img3 from '../assets/img(2).png';
import img4 from '../assets/arrow.png';
import img6 from '../assets/Group 3.png';
import img7 from '../assets/star-img.png';
import img8 from '../assets/star-img(1).png';

function Trade() {
    return (
        <>
           <div className="Trade">
                <div className="Group3"></div>
                <div className="Group2"></div>
                <div className="Group1"></div>
                
                <img src={img7} alt="" className='star1'/>
                <img src={img8} alt="" className='star2'/>
                <div className="cards">
                    <div className="card">
                        <img src={img1} alt="" className='head' />
                        <h2>Trade Desk</h2>
                        <p>Invest in crypto anytime, anywhere  with our safe, secure, and easy to  use online platform</p>
                        <a href="">Get Started <img src={img4} alt="" /></a>
                    </div>
                    <div className="card">
                        <img src={img2} alt="" className='head' />
                        <h2>CoinFlip ATMs</h2>
                        <p>We have thousands of ATMs located  across the U.S. where you can easily convert cash to crypto</p>
                        <a href="">Find an ATM <img src={img4} alt="" /></a>
                    </div>
                    <div className="card">
                        <img src={img3} alt="" className='head' />
                        <h2>CoinFlip Wallet</h2>
                        <p>Store your growing investments in our
                        non-custodial wallet that gives you access to a full suite of DeFi services in one place</p>
                        <a href="">Download the App <img src={img4} alt="" /></a>
                    </div>
                </div>
                
                
            </div> 
        </>
    );
}
export default Trade;