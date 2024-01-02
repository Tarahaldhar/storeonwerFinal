import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './DashboardMainSalesCreate.css';
import { actionCreators } from '../Store/SalesAuthToken/StoreAdminAction';
import { actionCreators as SidebarAction } from '../Store/SidebarComponent/SidebarAction';
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
    const getStoreAdminToken = useSelector(state => state?.salesLogin?.salestoken?.access)
    console.log('storeadminlogin', getStoreAdminToken);
    const dispatch = useDispatch()
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

            const response = await axios.post(
                'https://thewiseowl.pythonanywhere.com/salesperson/login/',
                {
                    // store_owner_email: salesPersonSignup.email,
                    name: salesLogin.name,
                    password: salesLogin.password,
                },

            );
            console.log('response', response.data);
            const token = response.data.tokens;
            setApiResDataa(response.data)
            dispatch(actionCreators.salesToken(token))
            dispatch(SidebarAction.sidebartype('sales-admin'))
            dispatch(actionCreators.setCustomerName(response.data.username))
            // toast.success("Login successfully", { duration: 4000 })
            toast("Login successfully", { autoClose: 2000 })
            setTimeout(() => {
                navigate('/customer-register', { state: { name: salesLogin.name, token } })

            }, 2000)
        } catch (error) {

            toast.error("Login fail", { autoClose: 2000 })
            console.log('error', error);
        }
    };

    return (

        <>
            <ToastContainer />
            <section className='bg-img-page' >



                {/* <DashbaordHeader />
            
                <DashboardCard />
                */}


                <form className='sales-register-create' style={{ marginTop: '50px' }}>

                    <h3 style={{
                        fontSize: '28px', textAlign: 'left', fontFamily: 'PT Sans',
                    }}>
                        Welcome! <b className='headingWelcomeBack'></b>
                        <strong><span style={{ color: '#000', fontWeight: '500', fontSize: '12px', marginTop: '-20px', textAlign: 'left' }}>Sign in to access <b style={{ color: '#6442c0' }}>admin dashboard</b></span></strong>
                    </h3>
                    <input type="text" id="name" name='name' value={salesLogin.name} onChange={(e) => handleInput(e)} placeholder='Name' />

                    <input type="password" id="password" name='password' value={salesLogin.password} onChange={(e) => handleInput(e)} placeholder='Password' />
                    <div className='checkboxText'>
                        <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label style={{ fontSize: '12px' }} for="rememberMe">Remember me</label><br />

                    </div>
                    <button className="login-button-admin" onClick={(e) => handleSubmit(e)}>Login</button>

                </form>

            </section >

        </>
    )
}

export default SalesPersonLogin