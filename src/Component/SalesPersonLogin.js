import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import './DashboardMainSalesCreate.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardCard from './DashboardCard';
import DashbaordHeader from './DashbaordHeader';

function CustomInput({ value, onClick }) {
    return (
        <div className='input-date-parent'>
            <div className='input-group'>
                <input type='text' className='form-control' value={value} onClick={onClick} readOnly />
                <div className='input-group-append'>
                    <span className='input-group-text'>
                        <FaCalendarAlt />
                    </span>
                </div>
            </div>
        </div>
    )
}
const SalesPersonLogin = () => {
    const navigate = useNavigate()
    const [apiResData, setApiResDataa] = useState([])// sales register
    const [selectedDate, setDate] = useState(null)// for select calender
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('storeadminlogin', getStoreAdminToken);

    const [salesLogin, setSalesLogin] = useState({
        name: "", password: ""
    })
    const handleInput = (e) => {
        e.preventDefault()
        setSalesLogin({
            ...salesLogin, [e.target.name]: e.target.value
        })
        console.log('input', salesLogin);
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
                'https://thewiseowl.pythonanywhere.com/salesperson/login/',
                {
                    // store_owner_email: salesPersonSignup.email,
                    name: salesLogin.name,
                    password: salesLogin.password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            );
            console.log('response', response.data);
            const token = response.data.tokens.access;
            localStorage.setItem('token', token);
            setApiResDataa(response.data)
            // toast.success("Login successfully", { duration: 4000 })
            toast("Login successfully", { autoClose: 2000 })
            setTimeout(() => {
                navigate('/customer-register', { state: { name: salesLogin.name, token } })

            }, 2000)
        } catch (error) {
            alert("Failed to sign up");
            console.log('error', error);
        }
    };

    return (

        <>
            <ToastContainer />
            <section className={`Dashboard-wrapper`}>
                {/* <!-- dashboard header section  --> */}
                {/* <!-- dashboard header section  --> */}
                <DashbaordHeader />
                {/* <!-- Dashbaord card section  --> */}
                <DashboardCard />
                {/* <!-- Dashboard Charts Section  --> */}
                {/* <!-- Dashboard Charts Section  --> */}
                <div class="table-data-wrapper">

                    <div class="table-inner-content table-responsive">

                        <form className='sales-register-create'>

                            <h5>Sales Login</h5>
                            <input type="text" id="name" name='name' value={salesLogin.name} onChange={(e) => handleInput(e)} placeholder='Name' />

                            <input type="password" id="password" name='password' value={salesLogin.password} onChange={(e) => handleInput(e)} placeholder='Password' />
                            <div className='checkboxText'>
                                <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label style={{ fontSize: '12px' }} for="rememberMe">Remember me</label><br />

                            </div>
                            <button className="login-button-admin" onClick={(e) => handleSubmit(e)}>Login</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SalesPersonLogin