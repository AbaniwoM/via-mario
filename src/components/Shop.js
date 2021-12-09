import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowLeft, MdArrowRight, MdDeliveryDining } from "react-icons/md";
import { DiOpensource } from "react-icons/di";
import { FaMedal } from "react-icons/fa";



const Shop = () => {
  const [isHovered, setHover] = useState(false);
  const [isHovered2, setHover2] = useState(false);

  return (
    <div className="container">
      <div className="announcement">
          Super Deal! Free Shipping on Orders Over #
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
                <div className="infoContainer">
                   <h1>Sale 10% Off</h1>
                   <h2>On Everything</h2>
                   <p>Get the best deals ever shopping with Via Mario. We offer you the best products in good delivery time. Hop in and shop with us.</p>
                   <button>Shop Now</button>
                </div>
            </div>
            <div className="rightArrow">
                <MdArrowRight />
            </div>
        </div>
      </div>
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
      <div className="new-arrivals">
            <div className="arrivalContainer">
                <h1>#New Arrivals</h1>
                <p>Here are our new products that may interest you. Hop in and checkout the new arrivals and choose your preferred products.</p>
                <button className="new">Shop Now</button>
            </div>
      </div>
      <div className="products">
        <div className="our-products">
            <div className="our">Our</div>
            <div className="goods">products</div>
        </div>
        <div className="line2"></div>
        <div className="row1">
        <div className="product1" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="img1"></div>
            {isHovered && (
                <button className="btn1">Add To Cart</button>
            )}
            {isHovered && (
                <button className="btn2">Buy Now</button>
            )}
            <div className="text1">
                <div className="label1">Perfumery</div>
                <div className="price">#</div>
            </div>
        </div>
        <div className="product2" onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
            <div className="img2"></div>
            {isHovered2 && (
                <button className="btn3">Add To Cart</button>
            )}
            {isHovered2 && (
                <button className="btn4">Buy Now</button>
            )}
            <div className="text2">
                <div className="label2">Perfumery</div>
                <div className="price2">#</div>
            </div>
        </div>
        <div className="product3">
            <div className="img3"></div>
            <div className="text3">
                <div className="label3">Perfumery</div>
                <div className="price3">#</div>
            </div>
        </div>
        </div>
        <div className="row2">
        <div className="product4">
            <div className="img4"></div>
            <div className="text4">
                <div className="label4">Perfumery</div>
                <div className="price4">#</div>
            </div>
        </div>
        <div className="product5">
            <div className="img5"></div>
            <div className="text5">
                <div className="label5">Footwear</div>
                <div className="price5">#</div>
            </div>
        </div>
        <div className="product6">
            <div className="img6"></div>
            <div className="text6">
                <div className="label6">Footwear</div>
                <div className="price6">#</div>
            </div>
        </div>
        </div>
        <div className="row3">
        <div className="product7">
            <div className="img7"></div>
            <div className="text7">
                <div className="label7">Footwear</div>
                <div className="price7">#</div>
            </div>
        </div>
        <div className="product8">
            <div className="img8"></div>
            <div className="text8">
                <div className="label8">Footwear</div>
                <div className="price8">#</div>
            </div>
        </div>
        <div className="product9">
            <div className="img9"></div>
            <div className="text9">
                <div className="label9">Footwear</div>
                <div className="price9">#</div>
            </div>
        </div>
        </div>
        <div className="row4">
        <div className="product10">
            <div className="img10"></div>
            <div className="text10">
                <div className="label10">Footwear</div>
                <div className="price10">#</div>
            </div>
        </div>
        <div className="product11">
            <div className="img11"></div>
            <div className="text11">
                <div className="label11">Footwear</div>
                <div className="price11">#</div>
            </div>
        </div>
        <div className="product12">
            <div className="img12"></div>
            <div className="text12">
                <div className="label12">Footwear</div>
                <div className="price12">#</div>
            </div>
        </div>
        </div>
        <button className="view">View All products</button>
      </div>
    </div>
  );
}

export default Shop;
