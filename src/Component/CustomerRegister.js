import React, { useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CustomerRegister = (props) => {
    const [salespersonname, setSalesPersonName] = useState([]) // select option
    const [option, setOption] = useState('')// call option below jsx
    console.log('salesData', props?.salesData);
    const navigate = useNavigate()
    const getTokenfromstore = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('getToken', getTokenfromstore);

    const [customerapiResData, setCustomerApiResData] = useState([]);
    const [customerjorney, setCustomerJorney] = useState({
        name: "", email: "", phone_number: "", salesname: ""  // Populate with salesData.name
    })
    const handleInput = (e) => {
        e.preventDefault()
        setCustomerJorney({
            ...customerjorney, [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the access token from the Redux store
            const accessToken = getTokenfromstore?.tokens?.access;
            // Check if the access token exists
            if (!accessToken) {
                alert("Access token not available. Please log in.");
                return;
            }
            const response = await axios.post(
                'http://127.0.0.1:8000/customer/register/',
                {
                    name: customerjorney.name,
                    email: customerjorney.email,
                    phone_number: customerjorney.phone_number,
                    salesperson_name: salespersonname,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            console.log('response', response.data);
            const token = response.data.getStoreAdminToken;
            localStorage.setItem('token', token);
            setCustomerApiResData(response.data)
            alert("Sales person successfully signup")
            navigate('/viewcustomer')

        } catch (error) {
            // alert("Failed to sign up");
            console.log('error', error);
        }

    };
    // sales person api call 
    useEffect(() => {
        const accessToken = getTokenfromstore?.tokens?.access;
        console.log('acces', accessToken);
        if (accessToken) {
            axios({
                url: 'http://127.0.0.1:8000/salesperson/create/',
                data: {

                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('salesmen', result.data);
                // setSalesPersonName(result.data)
                const optionSales = result.data.map((val) => {
                    return val.name
                })
                setSalesPersonName(optionSales[0])
                setOption(optionSales)
            })
        }
    }, [getTokenfromstore])

    const handleOption = (e) => {
        console.log('e', e);
        setSalesPersonName(e.value)
    }
    return (
        <div>
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

                            <i className="fa-solid fa-right-from-bracket" style={{ color: '#cc0033' }}></i>&nbsp;
                            <p style={{ marginBottom: '0px' }}>Logout</p>

                        </form>
                    </div>
                </div>
            </nav>
            {/* -------------------header end-------------- */}
            <div className='main-form-wrapper'>
                <form className='login' id='customer-rview'>
                    <h5>Customer Review</h5>
                    <div className='contentWithWrapperbtn'>
                        <p style={{ color: '#cc0033', fontWeight: 'bold', marginBottom: '0px' }}>No Review yet</p>
                        {/* <button id='writeReview-btn' className='write-review-customer'>Write a Review</button> */}
                    </div>

                    <br />
                    <hr />
                    <br />
                    <div className='orLoginwithCredn'>
                        <p style={{ color: '#71717A', fontWeight: '500', marginBottom: '10px' }}></p>
                    </div>
                    <input type='text' name='name' value={customerjorney.name} onChange={(e) => handleInput(e)} placeholder='Enter Name' />
                    <input type='text' name='email' value={customerjorney.email} onChange={(e) => handleInput(e)} placeholder='Enter Email' />
                    <input type='text' name='phone_number' value={customerjorney.phone_number} onChange={(e) => handleInput(e)} placeholder='Phone Number' />
                    {/* <input
                        type='text'
                        name='salesperson_name'
                        value={customerjorney.salesperson_name}
                        onChange={(e) => handleInput(e)}
                        placeholder='Salesperson Name'
                    /> */}



                    <Dropdown className="productList" style={{ textAlign: 'left !important' }} options={option} onChange={(e) => handleOption(e)} value={salespersonname} name="salesname" placeholder="Select an option" />

                    <div class="form-check form-check-inline checkbox-parent">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1" style={{ fontSize: '14px' }}>Remember</label>
                    </div>
                    {/* end checkbox */}
                    {/* <button type='submit' onClick={(e) => handleSubmit(e)} >Review</button> */}
                    <input type='submit' onClick={(e) => handleSubmit(e)} value="Review" />
                </form>
                <div className="mb-3" id="ftr">
                    <p className="footer" style={{ marginBottom: '0px' }}>Developed by Electrogets Technologies Pvt Ltd © 2023. All rights reserved by The Wise Owl</p>
                </div>
            </div>

        </div>
    )
}

export default CustomerRegister