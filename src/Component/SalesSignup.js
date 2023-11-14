import React from 'react';
import './SalesSignup.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import CustomerRegister from './CustomerRegister';
import { useEffect } from 'react';
import { actionCreators } from '../Store/StoreAdminAuth/StoreAdminAction';

const SalesSignup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [apiResData, setApiResData] = useState([])
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('storeadminlogin', getStoreAdminToken);
    const [salesPersonSignup, setSalesPersonSignup] = useState({
        email: "", name: "", job_id: ""
    })

    const handleInput = (e) => {
        e.preventDefault()
        setSalesPersonSignup({
            ...salesPersonSignup, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the access token from the Redux store
            const accessToken = getStoreAdminToken?.tokens?.access;
            // Check if the access token exists
            if (!accessToken) {
                alert("Access token not available. Please log in.");
                return;
            }
            const response = await axios.post(
                'http://127.0.0.1:8000/salesperson/create/',
                {
                    // store_owner_email: salesPersonSignup.email,
                    name: salesPersonSignup.name,
                    job_id: salesPersonSignup.job_id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            console.log('response', response.data);
            const token = response.data.accessToken;
            localStorage.setItem('token', token);
            setApiResData(response.data)
            alert("Sales person successfully signup")
            navigate('/customerjorney')
        } catch (error) {
            alert("Failed to sign up");
            console.log('error', error);
        }
    };

    // Check if token exists in local storage on component mount
    // useEffect(() => {
    //     const storedToken = localStorage.getItem('token');
    //     if (storedToken) {
    //        dispatch(actionCreators.masterStoreAdmin(storedToken))
    //     }
    // }, [dispatch])

    return (
        <div>
            <div className='sales-signup-page'>
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
                            <div className="d-flex align-items-center">



                                <i class="fa-solid fa-plus" style={{ color: '#cc0033', fontWeight: 'bold' }}></i>&nbsp;
                                <Link to={'/customerjorney'} style={{ textDecoration: 'none', color: '#cc0033' }}>
                                    <p style={{ marginBottom: '0px' }}>Take Review</p>
                                </Link>

                            </div>
                        </div>
                    </div>
                </nav>
                {/* -------------------header end-------------- */}

                <form className='login saless'>
                    <h3 style={{ fontSize: '18px' }}>Registration</h3>
                    <p style={{ marginBottom: '0px', color: '#cc0033', fontWeight: 'bold', textTransform: 'uppercase' }}>Sales</p><br />
                    {/* <div className='logo-admin'>
                    <img className='logothe-wise-owl' src='img/lglogo.png' />
                </div> */}
                    {/* <p style={{ textAlign: 'center', fontSize: '20px', color: '#71717A', marginBottom: '7px' }}>Login with</p> */}

                    <hr style={{ marginTop: '0px' }} />
                    <div className='logo_for_login'>
                                <i class="fa-solid fa-user"></i>
                            </div>
                    {/* <div className='orLoginwithCredn'>
                        <p style={{ color: '#71717A', fontWeight: '500', marginBottom: '10px' }}></p>
                    </div> */}
                    {/* <input type='text' name='email' value={salesPersonSignup.email} onChange={(e) => handleInput(e)} placeholder='Enter Store Onwer Email' /> */}
                    <input type='text' name='name' value={salesPersonSignup.name} onChange={(e) => handleInput(e)} placeholder='Enter Your Name' />
                    <input type='text' name='job_id' value={salesPersonSignup.job_id} onChange={(e) => handleInput(e)} placeholder='Enter Job Id' />



                    {/* checkbox */}
                    <div class="form-check form-check-inline checkbox-parent">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1" style={{ fontSize: '14px' }}>Remember</label>
                    </div>
                    {/* end checkbox */}

                    <input type='submit' onClick={(e) => handleSubmit(e)} value="Signup" />
                    {/* <CustomerRegister salesData={apiResData}/> */}
                </form>
                <div className="mb-3" id="ftr">
                    <p className="footer" style={{ marginBottom: '0px' }}>Developed by Electrogets Technologies Pvt Ltd © 2023. All rights reserved by The Wise Owl</p>
                </div>
            </div>
        </div>
    )
}

export default SalesSignup