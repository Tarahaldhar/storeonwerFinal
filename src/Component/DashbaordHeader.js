import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../Store/SidebarComponent/SidebarAction';
import { RxHamburgerMenu } from "react-icons/rx";

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

const DashbaordHeader = (props) => {
    const dispatch = useDispatch()
    const getToggleSidebar = useSelector(state => state.toggle.sidebarToggle)
    console.log(props);
    const [selectedDate, setDate] = useState(null)// for select calender
    console.log('date', selectedDate);

    const handleDate = (date) => {
        setDate(date)
        props.fun(date)
    }
    const handleData = () => {
        dispatch(actionCreators.SidebarToggle(!getToggleSidebar))
    }
    return (
        <>
            <header>
                {/* <span class="toggle-icon-dashboard" ><i class="bi bi-list"></i></span> */}
                <div class="top-bar">
                    <div class="top-left">
                        <div class="breadcrumb mb-0">
                            <ul class="list-unstyled">
                                <li onClick={(e) => handleData(e)}><a> <RxHamburgerMenu /></a></li>
                                <li><a href="">Home</a></li>
                                <li><a href="">Admin</a></li>
                            </ul>
                        </div>
                        {/* <h2 class="page-title mb-0">Admin Dashboard</h2> */}
                    </div>
                    <div class="top-right ">
                        {/* -------------search filter date header---------------------- */}
                        {window.location.pathname === '/customer-data' && <label><DatePicker selected={selectedDate} onChange={date => handleDate(date)} customInput={<CustomInput />} /></label>}
                        {/* -------------------search filter date header end--------------------- */}
                        {/* <div class="date-picker-wrap">December 2023</div> */}


                        <div class="avatar-wrap">
                            <img
                                src="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
                                alt=""
                                class="avatar-img"
                            />
                            <span class="user-name">Hello, User!</span>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default DashbaordHeader