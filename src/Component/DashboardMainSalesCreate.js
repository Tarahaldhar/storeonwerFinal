import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './DashboardMainSalesCreate.css';
import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';
import { ToastContainer, toast } from 'react-toastify';
import { actionCreators } from '../Store/SalesAuthToken/StoreAdminAction';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const DashboardMainSalesCreate = () => {
    const navigate = useNavigate()
    const [apiResData, setApiResDataa] = useState([])// sales register
    const dispatch = useDispatch()
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin.access)
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

            const response = await axios.post(
                'https://thewiseowl.pythonanywhere.com/salesperson/create/',
                {
                    // store_owner_email: salesPersonSignup.email,
                    name: salesRegister.name,
                    password: salesRegister.password,
                },
                {
                    headers: {
                        Authorization: `Bearer ${getStoreAdminToken}`
                    }
                }
            );
            console.log('response', response.data);
            const token = response.data.tokens;
            setApiResDataa(response.data)
            dispatch(actionCreators.salesToken(token))
            toast("Register successfully", { autoClose: 2000 })
            setTimeout(() => {
                navigate('/sales-login')

            }, 2000)
            // navigate('/customerreview')
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