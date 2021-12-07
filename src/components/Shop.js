import React from 'react';
import { GrSearch, GrMail } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";



const Shop = () => {
  return (
    <div className="container">
      <div className="announcement">
          Super Deal! Free Shipping on Orders Over $50
      </div>
      <div className="navbar">
        <div className="left">
            <div className="language">EN</div>
            <div className="search">
                <div className="input">
                    <input type="text" /> 
                </div>
                <div className="searchIcon">
                    <GrSearch />
                </div>
            </div>
        </div> 
        <div className="center">
            <div className="logo">
                <h1>VIA MARIO.</h1>
            </div>
        </div> 
        <div className="right">
            <div className="menuItem">
                <div className="register">REGISTER</div>
                <div className="signIn">SIGN IN</div>
                <div className="cart">
                    <AiOutlineShoppingCart />
                </div>
            </div>
        </div> 
      </div>
      <div className="slider">
        <div className="arrows">  
            <div className="leftArrow">
                <MdArrowLeft />
            </div>
            <div className="wrapper">
                <div className="imgContainer">
                    
                </div>
                <div className="infoContainer">
                
                </div>
            </div>
            <div className="rightArrow">
                <MdArrowRight />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
