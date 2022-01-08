import React, { useState } from 'react'

const Arrivals = () => {
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
            <div className="new-arrivals">
            <div className="arrivalContainer">
                <h1>#New Arrivals</h1>
                <p>Here are our new products that may interest you. Hop in and checkout the new arrivals and choose your preferred products.</p>
                <button className="new" onClick={toggleModal}>Shop Now</button>
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
                    <div className="modalContentRight">
                          <form action="/" method="GET" className="modalForm" id="form">
                            <div className="shop-logo2">
                            </div>
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
                    <button className="closeModal" onClick={toggleModal2}>&times;</button>
                    <div className="modalContentLeft2">
                    </div>
                    <div className="modalContentRight">
                        <form action="/" method="GET" className="modalForm" id="form">
                            <div className="shop-logo3">
                            </div>
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
    )
}

export default Arrivals
