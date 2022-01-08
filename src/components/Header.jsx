import React, { useState } from 'react'
import { GrSearch } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";
import RegisterForm from './RegisterForm';
import Login from './Login';


const Header = () => {
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
        <div>
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
            <div className="shop-logo">
            </div>
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

      {/* Register Modal */}
      {modal && (
          <div className="modal" id="register-modal" >
              <div className="overlay" onClick={toggleModal}></div>
                <div className="modalContent">
                    <button className="closeModal" onClick={toggleModal}>&times;</button>
                    <div className="modalContentLeft">
                    </div>
                    <RegisterForm />
                </div>
            </div>
        )}


        {/* Login Modal */}
        {modal2 && (
          <div className="modal" id="modal2" >
              <div className="overlay" onClick={toggleModal2}></div>
                <div className="modalContent">
                    <button className="closeModal" onClick={toggleModal2}>&times;</button>
                    <div className="modalContentLeft2">
                    </div>
                    <Login />
                </div>
            </div>
        )}
      </div>
    )
}

export default Header
