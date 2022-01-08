import React from 'react'
import { MdDeliveryDining } from "react-icons/md";
import { DiOpensource } from "react-icons/di";
import { FaMedal } from "react-icons/fa";

const Services = () => {
    return (
        <div>
        <div className="shop">
        <h1>Why Shop With Us?</h1>
        <div className="line"></div>
        <div className="boxes">
            <div className="box1">
                <div className="delivery-icon">
                    <MdDeliveryDining/>
                </div>
                <div className="fast">
                    <h3>Fast Delivery</h3>
                    <p>We bring you fast Delivery services to your taste.</p>
                </div>
            </div>
            <div className="box2">
                <div className="free-icon">
                    <DiOpensource/>
                </div>
                <div className="free">
                    <h3>Free Shipping</h3>
                    <p>We ship your goods in good condition for free.</p>
                </div>
            </div>
            <div className="box3">
                <div className="best-icon">
                    <FaMedal/>
                </div>
                <div className="best">
                    <h3>Best Quality</h3>
                    <p>We bring you best Quality goods to your taste.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Services
