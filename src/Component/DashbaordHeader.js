import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../Store/SidebarComponent/SidebarAction';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { DateRange } from 'react-date-range';
import moment from 'moment';
import "rsuite/dist/rsuite.css";
import { DateRangePicker } from 'rsuite';
import { actionCreators as dateAction } from '../Store/DateRange/DateRangeAction';

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
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const dispatch = useDispatch()
    const salesPersonName = useSelector(state => state.salesToken.customerName)

    const getToggleSidebar = useSelector(state => state.toggle.sidebarToggle)
    console.log(props);
    const [selectedDate, setDate] = useState(null)// for select calender
    console.log('date', selectedDate);

    const handleDate = (date) => {
        setDate(date)
        const date1 = moment(date[0]).format('yyyy-MM-D')
        const date2 = moment(date[1]).format('yyyy-MM-D')
        console.log('daterange', date1, date2);
        props.fun(date1, date2)
        dateAction.dateRangeFilter({ date1, date2 })

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
                                <li><Link to="/admin">Home</Link> <IoIosArrowForward /></li>
                                <li><Link to="/admin">Admin</Link></li>
                            </ul>
                        </div>
                        <h4 className="page-title mb-0">Admin Dashboard</h4>
                    </div>
                    <div className="top-right" style={{ textAlign: 'center' }}>
                        {/* -------------search filter date header---------------------- */}
                        {(window.location.pathname === '/customer-data') && <label><DateRangePicker selected={selectedDate}
                            onOk={date => handleDate(date)} customInput={<CustomInput />}
                            appearance="default" placeholder="Default" style={{ width: 230 }} /></label>}

                        {/* -------------------search filter date header end--------------------- */}
                        {/* <div class="date-picker-wrap">December 2023</div> */}


                        <div class="avatar-wrap">
                            <img
                                src="https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-of-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg"
                                alt=""
                                class="avatar-img"
                            />&nbsp; &nbsp;
                            <span class="user-name">Hello {salesPersonName}</span>
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default DashbaordHeader