import React, { useState } from 'react';
import { GrSearch } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdArrowLeft, MdArrowRight, MdDeliveryDining } from "react-icons/md";
import { DiOpensource } from "react-icons/di";
import { FaMedal } from "react-icons/fa";


const Shop = () => {
  const [isHovered, setHover] = useState(false);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);
  const [isHovered4, setHover4] = useState(false);
  const [isHovered5, setHover5] = useState(false);
  const [isHovered6, setHover6] = useState(false);
  const [isHovered7, setHover7] = useState(false);
  const [isHovered8, setHover8] = useState(false);
  const [isHovered9, setHover9] = useState(false);
  const [isHovered10, setHover10] = useState(false);
  const [isHovered11, setHover11] = useState(false);
  const [isHovered12, setHover12] = useState(false);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const [modal2, setModal2] = useState(false);

    const toggleModal2 = () => {
        setModal2(!modal2)
    }

    if(modal2) {
        document.body.classList.add('active-modal2')
    } else {
        document.body.classList.remove('active-modal2')
    }

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
                <h1>Via Mario.</h1>
            </div>
        </div> 
        <div className="right">
            <div className="menuItem">
                <div className="register" onClick={toggleModal}>REGISTER</div>
                <div className="signIn" onClick={toggleModal2}>SIGN IN</div>
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
                   <button onClick={toggleModal} className="wrap-btn">Shop Now</button>
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
                <button className="new" onClick={toggleModal}>Shop Now</button>
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
                <button className="btn1" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered && (
                <button className="btn2" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text1">
                <div className="label1">Perfumery</div>
                <div className="price">#</div>
            </div>
        </div>
        <div className="product2" onMouseOver={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
            <div className="img2"></div>
            {isHovered2 && (
                <button className="btn3" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered2 && (
                <button className="btn4" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text2">
                <div className="label2">Perfumery</div>
                <div className="price2">#</div>
            </div>
        </div>
        <div className="product3" onMouseOver={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
            <div className="img3"></div>
            {isHovered3 && (
                <button className="btn5" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered3 && (
                <button className="btn6" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text3">
                <div className="label3">Perfumery</div>
                <div className="price3">#</div>
            </div>
        </div>
        </div>
        <div className="row2">
        <div className="product4" onMouseOver={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
            <div className="img4"></div>
            {isHovered4 && (
                <button className="btn7" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered4 && (
                <button className="btn8" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text4">
                <div className="label4">Perfumery</div>
                <div className="price4">#</div>
            </div>
        </div>
        <div className="product5" onMouseOver={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
            <div className="img5"></div>
            {isHovered5 && (
                <button className="btn9" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered5 && (
                <button className="btn10" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text5">
                <div className="label5">Footwear</div>
                <div className="price5">#</div>
            </div>
        </div>
        <div className="product6" onMouseOver={() => setHover6(true)} onMouseLeave={() => setHover6(false)}>
            <div className="img6"></div>
            {isHovered6 && (
                <button className="btn11" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered6 && (
                <button className="btn12" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text6">
                <div className="label6">Footwear</div>
                <div className="price6">#</div>
            </div>
        </div>
        </div>
        <div className="row3">
        <div className="product7" onMouseOver={() => setHover7(true)} onMouseLeave={() => setHover7(false)}>
            <div className="img7"></div>
            {isHovered7 && (
                <button className="btn13" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered7 && (
                <button className="btn14" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text7">
                <div className="label7">Footwear</div>
                <div className="price7">#</div>
            </div>
        </div>
        <div className="product8" onMouseOver={() => setHover8(true)} onMouseLeave={() => setHover8(false)}>
            <div className="img8"></div>
            {isHovered8 && (
                <button className="btn15" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered8 && (
                <button className="btn16" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text8">
                <div className="label8">Footwear</div>
                <div className="price8">#</div>
            </div>
        </div>
        <div className="product9" onMouseOver={() => setHover9(true)} onMouseLeave={() => setHover9(false)}>
            <div className="img9"></div>
            {isHovered9 && (
                <button className="btn17" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered9 && (
                <button className="btn18" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text9">
                <div className="label9">Footwear</div>
                <div className="price9">#</div>
            </div>
        </div>
        </div>
        <div className="row4">
        <div className="product10" onMouseOver={() => setHover10(true)} onMouseLeave={() => setHover10(false)}>
            <div className="img10"></div>
            {isHovered10 && (
                <button className="btn19" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered10 && (
                <button className="btn20" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text10">
                <div className="label10">Footwear</div>
                <div className="price10">#</div>
            </div>
        </div>
        <div className="product11" onMouseOver={() => setHover11(true)} onMouseLeave={() => setHover11(false)}>
            <div className="img11"></div>
            {isHovered11 && (
                <button className="btn21" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered11 && (
                <button className="btn22" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text11">
                <div className="label11">Footwear</div>
                <div className="price11">#</div>
            </div>
        </div>
        <div className="product12" onMouseOver={() => setHover12(true)} onMouseLeave={() => setHover12(false)}>
            <div className="img12"></div>
            {isHovered12 && (
                <button className="btn23" onClick={toggleModal}>Add To Cart</button>
            )}
            {isHovered12 && (
                <button className="btn24" onClick={toggleModal}>Buy Now</button>
            )}
            <div className="text12">
                <div className="label12">Footwear</div>
                <div className="price12">#</div>
            </div>
        </div>
        </div>
        <button className="view" onClick={toggleModal}>View All products</button>
      </div>

      {/* Register Modal */}
      {modal && (
          <div className="modal" id="register-modal" >
              <div className="overlay" onClick={toggleModal}></div>
                <div className="modalContent">
                    <button className="closeModal" onClick={toggleModal}>X</button>
                    <div className="modalContentLeft">
                    </div>
                    <div className="modalContentRight">
                          <form action="/" method="GET" className="modalForm" id="form">
                            <div className="logo2">
                            <div className="vest2">Via Mario</div>
                            </div>
                            <div className="formHead">Get started with us today! Create your account by filling the information below...</div>
                            
                            <div className="formValidation">
                                <input type="text" className="modalInput" name="username" id="username" placeholder="Enter your username"  />
                            </div>
                            {/* {nameErrors && <p>{nameErrors}</p>} */}
                            <div className="formValidation">
                                <input type="email" className="modalInput" name="email" id="email" placeholder="Enter your Email"/>
                            </div>
                            {/* {emailErrors && <p>{emailErrors}</p>} */}
                            <div className="formValidation">
                                <input type="password" className="modalInput" name="password" id="password" placeholder="Enter your Password" />
                            </div>
                            {/* {passwordErrors && <p>{passwordErrors}</p>} */}
                            <div className="formValidation">
                                <input type="password" className="modalInput" name="password2" id="password2" placeholder="Confirm your Password"  />
                            </div>
                            {/* {password2Errors && <p>{password2Errors}</p>} */}
                            <input type="submit" className="modalInputBtn" value="Register" />
                            <span className="modalInputLogin">Already have an account? Sign In <a href="#modal2" onClick={toggleModal2}>here</a></span>
                        </form>
                    </div>
                </div>
            </div>
        )}

        {/* Login Modal */}
        {modal2 && (
          <div className="modal" id="modal2" >
              <div className="overlay" onClick={toggleModal2}></div>
                <div className="modalContent">
                    <button className="closeModal" onClick={toggleModal2}>X</button>
                    <div className="modalContentLeft2">
                    </div>
                    <div className="modalContentRight">
                        <form action="/" method="GET" className="modalForm" id="form">
                            <div className="logo2">
                            <div className="vest2">Via Mario</div>
                            </div>
                            <div className="formHead">Get started with us today! Sign in by filling your correct details below...</div>
                            <div className="formValidation">
                                <input type="email" className="modalInput" id="email" name="email" placeholder="Enter your Email" />
                                <p>Error Message</p>
                            </div>
                            <div className="formValidation">
                                <input type="password" className="modalInput" id="password" name="password" placeholder="Enter your Password" />
                                <p>Error Message</p>
                            </div>
                            <input type="submit" className="modalInputBtn" value="Sign In" />
                            <span className="modalInputLogin2">Don't have an account? Register <a href="#modal" onClick={toggleModal}>here</a></span>
                        </form>
                    </div>
                </div>
            </div>
        )}
    </div>
  )};



export default Shop;
