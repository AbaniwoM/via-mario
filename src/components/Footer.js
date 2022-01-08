import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <div className="footer">
        <div className="foot">
            <div className="foot-logo">
            </div>
            <div className="log">
                <h1>Via Mario.</h1>
            </div>
        </div>
        <div className="address">Contact</div> 
        <div className="email">
            <div className="email-icon">
                <AiOutlineMail />
            </div>
            <div className="mail">vimario12@yahoo.com</div>
        </div> 
        <div className="number">
            <div className="number-icon">
                <BsTelephone />
            </div>
            <div className="phone">07081202907, 08181077978</div>
        </div> 
        <div className="location">
            <div className="location-icon">
                <MdOutlineLocationOn />
            </div>
            <div className="place">36 Alhaji Yusuf,off coconut  bus-stop,Apspa-Oshodi Express way.</div>
        </div>
        <div className="copy-right">
            <div className="copy">Implemented by <a href="https://www.linkedin.com/in/michael-abaniwo/">Michael Abaniwo</a></div>
            <div className="right-date">&copy; 2021</div>
        </div> 
        </div>
        </div>
    )
}

export default Footer
