import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { FaCalendarAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin.access)
    const [selectedDate, setDate] = useState(null)// for select calender
    const [salesGetData, setSalesGetData] = useState([])
    const [allData, setAllData] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(1)

    // sales person api call 
    useEffect(() => {
        if (getStoreAdminToken) {

            axios({
                url: 'https://thewiseowl.pythonanywhere.com/salespersons/',
                data: {

                },
                headers: {
                    Authorization: `Bearer ${getStoreAdminToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('salesmen', result.data);

                const optionSales = result.data.map((val) => {
                    return val.name
                })
                setAllData(result.data)
                setSalesGetData(result.data.slice(0, 10))
                setNumberOfPages(Math.ceil(result.data.length / 10))
            })
        }
    }, [getStoreAdminToken])

    const handleCustomerDataBySales = (name) => {

        axios({
            url: 'https://thewiseowl.pythonanywhere.com/api/salesperson/customer_count/',
            data: {
                "salesperson_name": name
            },
            headers: {
                Authorization: `Bearer ${getStoreAdminToken}`
            },
            method: 'post'
        }).then((result) => {
            console.log('salesmen', result.data);
            if (result.data.customers.length > 0) {
                navigate('/customer-data', { state: { data: result.data.customers } })


            }
            else {
                toast.error("No customer")

            }
            // setSalesGetData(result.data)
            // const optionSales = result.data.map((val) => {
            //     return val.name
            // })

        })

    }
    const handlePageClick = async (data1) => {
        console.log('click');
        console.log('pagecount3', data1.selected);
        const data = allData.slice(data1.selected * 10, (data1.selected + 1) * 10)
        setSalesGetData(data.slice(0, 10))
        // setNumberOfPages(Math.ceil(data.length / 10))
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
                                        <td style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} onClick={(id) => handleCustomerDataBySales(val.name)}>{val.name}</td>

                                    </tr>
                                ))}



                            </tbody>
                        </table>

                        <ReactPaginate
                            previousLabel={<i style={{ color: '#cc0033' }} className="fas fa-angle-left"></i>}
                            nextLabel={<i style={{ color: '#cc0033' }} className="fas fa-angle-right"></i>}
                            breakLabel={'...'}
                            pageCount={numberOfPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination justify-content-center'}
                            pageClassName={'page-item'}
                            pageLinkClassName={'page-link'}
                            previousClassName={'page-item'}
                            previousLinkClassName={'page-link'}
                            nextClassName={'page-item'}
                            nextLinkClassName={'page-link'}
                            breakClassName={'page-item'}
                            breakLinkClassName={'page-link'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardMainSalesData