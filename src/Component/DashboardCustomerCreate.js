import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import DashboardCard from './DashboardCard';
import DashbaordHeader from './DashbaordHeader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { actionCreators } from '../Store/StoreAdminPannel/SalesAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerRegisterNotifyModal from './CustomerRegisterNotifyModal';
const DashboardCustomerCreate = () => {
    const salesPersonName = useSelector(state => state.salesToken.customerName)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [salespersonname, setSalesPersonName] = useState() // select option
    const [showModal, setShowModal] = useState(false)
    const [selectProduct, setSelectProduct] = useState()
    const [optionShopping, setOptionShopping] = useState('')// call option below jsx

    const [apiResData, setApiResDataa] = useState([])// sales register
    const [selectedDate, setDate] = useState(null)// for select calender
    const getStoreAdminToken = useSelector(state => state?.salesToken?.salestoken?.access)
    console.log('salestoken', getStoreAdminToken);

    const [customerRegister, setCustomerRegister] = useState({
        name: "", email: "", phone_number: "",
    })
    const handleInput = (e) => {
        e.preventDefault()
        setCustomerRegister({
            ...customerRegister, [e.target.name]: e.target.value
        })
        console.log('input', customerRegister);
    }
    const handleSubmit = async () => {

        try {

            const response = await axios.post(
                'https://thewiseowl.pythonanywhere.com/customer/register/',
                {
                    // store_owner_email: salesPersonSignup.email,
                    name: customerRegister.name,
                    email: customerRegister.email,
                    phone_number: customerRegister.phone_number,
                    product_choice: selectProduct,
                    description: customerRegister.description,
                    salesperson_name: salesPersonName,
                    visit_type: optionShopping

                },
                {
                    headers: {
                        Authorization: `Bearer ${getStoreAdminToken}`
                    }
                }
            );
            console.log('response', response.data);
            const token = response.data.accessToken;
            setApiResDataa(response.data)
            toast("Register successfully", { autoClose: 2000 })
            setTimeout(() => {
                navigate('/sales-login', { state: { selectProduct, customerRegister, salespersonname } })

            }, 2000)
            // navigate('/viewcustomer', {
            //     state: { selectProduct, customerRegister, salespersonname }
            // })
        } catch (error) {
            alert("Failed to sign up");
            console.log('error', error);
        }
    };
    const handleProductList = (e) => {
        console.log(e);
        setSelectProduct(e.target.value)
    }
    // dispatch(actionCreators.salesData(customerjorney))
    const handleShoppingType = (e) => {
        console.log(e);
        setOptionShopping(e.target.value)
    }
    const handleClose = () => {

        setShowModal(false)
    }
    const handleOpen = (e) => {
        e.preventDefault()
        setShowModal(true)
    }
    return (

        <>
            <ToastContainer />
            <section className={`Dashboard-wrapper bg-img-page`}>
                {showModal && <CustomerRegisterNotifyModal customerRegister={customerRegister} optionShopping={optionShopping} salesPersonName={salesPersonName} handleClose={handleClose} handleSubmit={handleSubmit} />
                }
                {/* <!-- dashboard header section  --> */}
                {/* <DashbaordHeader /> */}
                {/* <!-- Dashbaord card section  --> */}
                {/* <DashboardCard /> */}
                {/* <!-- Dashboard Charts Section  --> */}
                <div class="table-data-wrapper-z123" >

                    <div class="table-inner-content table-responsive">

                        <form className='sales-register-create '>

                            <h5>Customer Registration</h5>
                            <div className="row">
                                <div className="col-md-12 col-xs-4">
                                    <input type="text" id="name" name='name' value={customerRegister.name} onChange={(e) => handleInput(e)} placeholder='Name' />
                                </div>
                                <div className="col-md-12 col-xs-4 mb-2">
                                    <input type="email" id="email" name='email' value={customerRegister.email} onChange={(e) => handleInput(e)} placeholder='Email' />
                                </div>
                                <div className="col-md-12 col-xs-4">
                                    <input type="text" id="phone_number" name='phone_number' value={customerRegister.phone_number} onChange={(e) => handleInput(e)} placeholder='Mobile' />
                                </div>
                                {/* <div className="col-md-6">
                                    <div className="">
                                        <select name='Product' id="Product" className=" border-none" onChange={(e) => handleProductList(e)}>
                                            <option value="" disabled selected> Select product</option>
                                            <option value="Air Conditioner">Air Conditioner  </option>
                                            <option value="Refrigerator">Refrigerator</option>
                                            <option value="Washing Machine">Washing Machine </option>
                                            <option value="Oled/Nano/UHD/ LED">Oled/Nano/UHD/ LED </option>
                                            <option value="Microwave ">Microwave   </option>
                                            <option value="Water Purifier">Water Purifier</option>
                                            <option value="Air Purifier">Air Purifier</option>
                                            <option value="Dishwasher ">Dishwasher </option>
                                            <option value="XBoom"> XBoom </option>
                                            <option value="Tone Free">Tone Free </option>
                                            <option value="Styler ">Styler  </option>
                                            <option value="Styler ">Other  </option>

                                        </select>
                                        <span id="Product_e" className="text-danger font-weight-bold"></span>
                                    </div>
                                </div> */}

                                <div className="col-md-12 col-xs-4">
                                    <div className="">
                                        <select name='visit_type' id="visit_type" className=" border-none" onChange={(e) => handleShoppingType(e)}>
                                            <option value="" disabled selected> Select Visit Type</option>
                                            <option value="shopping"> Shopper</option>
                                            <option value="visitor">Visitor </option>
                                        </select>
                                        <span id="Product_e" className="text-danger font-weight-bold"></span>
                                    </div>
                                </div>

                                <div className="col-md-12 col-xs-4" >
                                    <div class="form-group mt-3">
                                        <textarea name='description' value={customerRegister.description} onChange={(e) => handleInput(e)} placeholder='Feedback' class="form-control" id="exampleFormControlTextarea1" rows="3" />
                                    </div>
                                </div>
                                {/* <div className="col-md-6">
                                    <div className='checkboxText'>
                                        <input type="checkbox" value="lsRememberMe" id="rememberMe" /> <label style={{ fontSize: '12px' }} for="rememberMe">Remember me</label><br />

                                    </div>
                                </div> */}
                            </div>


                            <button className="login-button-admin" onClick={(e) => handleOpen(e)}>Register</button>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardCustomerCreate