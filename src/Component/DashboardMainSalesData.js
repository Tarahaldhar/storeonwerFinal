import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';

import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';
import axios from 'axios';
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
const DashboardMainSalesData = () => {
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('storeadminlogin', getStoreAdminToken);
    const [selectedDate, setDate] = useState(null)// for select calender
    const [salesGetData, setSalesGetData] = useState([])

    // sales person api call 
    useEffect(() => {
        const accessToken = getStoreAdminToken?.tokens?.access;
        console.log('acces', accessToken);
        if (accessToken) {
            axios({
                url: 'https://thewiseowl.pythonanywhere.com/salespersons/',
                data: {

                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('salesmen', result.data);
                setSalesGetData(result.data)
                const optionSales = result.data.map((val) => {
                    return val.name
                })

            })
        }
    }, [getStoreAdminToken])
    return (

        <>
            <section className={`Dashboard-wrapper`}>
                {/* <!-- dashboard header section  --> */}
                {/* <!-- dashboard header section  --> */}
                <DashbaordHeader />
                {/* <!-- Dashbaord card section  --> */}
                <DashboardCard />
                {/* <!-- Dashboard Charts Section  --> */}
                {/* <!-- Dashboard Charts Section  --> */}
                <div class="table-data-wrapper">
                    <h5>Sales Representive</h5>
                    <div class="table-inner-content table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                {salesGetData.map((val) => (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>

                                    </tr>
                                ))}



                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardMainSalesData