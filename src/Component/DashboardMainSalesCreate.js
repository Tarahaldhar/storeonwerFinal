import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './DashboardMainSalesCreate.css';

import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';


const DashboardMainSalesCreate = () => {
    const [apiResData, setApiResDataa] = useState([])// sales register

    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('storeadminlogin', getStoreAdminToken);

    const [salesRegister, setSalesRegister] = useState({
        name: "", password: ""
    })
    const handleInput = (e) => {
        e.preventDefault()
        setSalesRegister({
            ...salesRegister, [e.target.name]: e.target.value
        })
        console.log('input', salesRegister);
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
                'https://thewiseowl.pythonanywhere.com/salesperson/create/',
                {
                    // store_owner_email: salesPersonSignup.email,
                    name: salesRegister.name,
                    password: salesRegister.password,
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
            setApiResDataa(response.data)
            alert("Sales person successfully signup")
            // navigate('/customerreview')
        } catch (error) {
            alert("Failed to sign up");
            console.log('error', error);
        }
    };

    return (

        <>
            <section className={`Dashboard-wrapper`}>
                {/* <!-- dashboard header section  --> */}
                <DashbaordHeader />
                {/* <!-- Dashbaord card section  --> */}
                <DashboardCard />
                {/* <!-- Dashboard Charts Section  --> */}
                <div class="table-data-wrapper">

                    <div class="table-inner-content table-responsive">

                        <form className='sales-register-create'>

                            <h5>Sales Registration</h5>
                            <input type="text" id="name" name='name' value={salesRegister.name} onChange={(e) => handleInput(e)} placeholder='Name' />

                            <input type="password" id="password" name='password' value={salesRegister.password} onChange={(e) => handleInput(e)} placeholder='Password' />
                            <div className='checkboxText'>
                                <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label style={{ fontSize: '12px' }} for="rememberMe">Remember me</label><br />

                            </div>
                            <button className="login-button-admin" onClick={(e) => handleSubmit(e)}>Register</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardMainSalesCreate