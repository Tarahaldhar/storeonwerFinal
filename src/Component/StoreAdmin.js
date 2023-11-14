import React, { useState } from 'react';
import './StoreAdmin.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../Store/StoreAdminAuth/StoreAdminAction';

const StoreAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [storeLogin, setStoreLogin] = useState({
        email: "", password: ""
    })
    const handleInput = (e) => {
        e.preventDefault()
        setStoreLogin({
            ...storeLogin, [e.target.name]: e.target.value
        })
        console.log('input', storeLogin);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionCreators.masterStoreAdmin(storeLogin))
        alert("Store Owner Login Successfully")
        navigate('/customerjorney')
    }
    return (
        <>
            <div>
                <div className='store-admin'>

                    {/* ---------------header--------------------- */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <div className='logo-admin'>
                                <Link to="/">
                                    <img className='logothe-wise-owl' style={{ width: '60px', height: '60px' }} src='img/lglogo.png' />
                                </Link>
                            </div>
                            {/* <a class="navbar-brand" href="#">Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}

                                </ul>
                                <form className="d-flex align-items-center">

                                    {/* <i className="fa-solid fa-right-from-bracket" style={{ color: '#cc0033' }}></i>&nbsp;
                            <p style={{ marginBottom: '0px' }}>Logout</p> */}

                                    <i className="fa-solid fa-plus" style={{ color: '#cc0033' }}></i>&nbsp;
                                    <Link to='./salesSignup' style={{ textDecoration: 'none' }}>
                                        <p style={{ marginBottom: '0px', fontSize: '15px', color: '#cc0033', fontWeight: 'bold' }}>Sales Candidate</p>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </nav>
                    {/* -------------------header end-------------- */}
                    <section className='firstback-img' >
                        <div className='orLoginwithCredn'>
                            <h5 style={{ marginBottom: '0px', fontSize: '18px', fontWeight: 'bold' }}>LOGIN WITH CREDENTIAL</h5>
                        </div>
                        <form className='login storeAdmin'>
                            {/* <div className='logo-admin'>
                            <img className='logothe-wise-owl' src='img/lglogo.png' />
                        </div> */}
                            {/* 
                <p style={{ textAlign: 'center', fontSize: '20px', color: '#71717A', marginBottom: '7px' }}>Login with</p> */}

                            {/* <hr style={{ margin: '0px' }} /> */}

                            <div className='logo_for_login'>
                                <i class="fa-solid fa-user"></i>
                            </div>
                            {/* <hr style={{ margin: '0px' }} /> */}
                            <br />
                            <input type='text' name='email' value={storeLogin.email} onChange={(e) => handleInput(e)} placeholder='User Name' />
                            <input type='password' name='password' value={storeLogin.password} onChange={(e) => handleInput(e)} placeholder='Password' />

                            {/* checkbox */}
                            <div class="form-check form-check-inline checkbox-parent">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1" style={{ fontSize: '14px' }}>Remember</label>
                            </div>
                            {/* end checkbox */}

                            <input type='submit' onClick={(e) => handleSubmit(e)} value="Log In" />



                        </form>

                    </section>

                </div>
                <div className="mb-3" id="ftr">
                    <p className="footer" style={{ marginBottom: '0px' }}>Developed by Electrogets Technologies Pvt Ltd © 2023. All rights reserved by The Wise Owl</p>
                </div>
            </div>
        </>
    )
}

export default StoreAdmin