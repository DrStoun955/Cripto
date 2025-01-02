import React, { useState, useEffect } from 'react';
import arrow from '../assets/arrow.png';
import arrow2 from '../assets/arrow2.png';
import img1 from '../assets/bag.png';
import '../Styles/Buy.css';
import img2 from '../assets/small-graph.png';
import img3 from '../assets/Group 4.png';
import img4 from '../assets/bg-img3.png';


function Buy() {

    const [assets, setAssets] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = "https://api.coincap.io/v2/assets";

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Serverdan ma'lumot olishda xatolik yuz berdi!");
                }
                return response.json();
            })
            .then((data) => {
                setAssets(data.data.slice(0, 5));
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    if (error) {
        return <p>Xatolik: {error}</p>;
    }

    return (
        <div className="Buy">
            <div className="group4"></div>
            <img src={img4} alt="" className='bg-img3' />
            <h2>Buy and sell with the lowest <br /> fees in the industry</h2>
            <p>Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank <br /> transfers or your credit/debit card.</p>
            <a href="">Learn More <img src={arrow} alt="" /></a>

            <div className="box1">
                <div className="crypto-container">
                    {assets.length > 0 ? (
                        assets.map((asset) => (
                            <div key={asset.id} className="crypto-card">
                                <div className="crypto-info">
                                    <span className="crypto-name">{asset.name}</span>
                                    <span className="crypto-symbol"><a href={asset.explorer}>{asset.symbol}</a></span>
                                </div>
                                <div className="crypto-price">
                                    <span className='crypto-price-usd'>${parseFloat(asset.priceUsd).toFixed(2)}</span>
                                    <span
                                        className={`crypto-change ${parseFloat(asset.changePercent24Hr) > 0 ? "positive" : "negative"}`}
                                    >
                                        {parseFloat(asset.changePercent24Hr).toFixed(2)}%
                                    </span>
                                    <img src={img2} alt="" />
                                    <h3>Trade Now <img src={arrow2} alt="" /></h3>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Yuklanmoqda...</p>
                    )}
                </div>
            </div>
                
            

            <div className="box2">
                <div className="left">
                    <h2>Take your first step into safe, secure  crypto investing</h2>
                   <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they live in Bookmarks right at the coast.</p>
                    <button className='btn btn-outline-light'>Get Started</button>
                </div>
                <div className="right">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
     );
}
    
export default Buy;