import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import { FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';
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
const DashboardCustomerData = () => {
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('storeadminlogin', getStoreAdminToken);
    const [numberOfPages, setNumberOfPages] = useState(1)
    const [allData, setAllData] = useState([])
    const [selectedDate, setDate] = useState(null)// for select calender
    const [customerGetData, setCustomerGetData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageSize, setPageSize] = useState(5); // Adjust the page size as needed
    const [storeData, setStoreData] = useState();

    // sales person api call 
    useEffect(() => {
        const accessToken = getStoreAdminToken?.tokens?.access;
        console.log('acces', accessToken);
        if (accessToken) {
            axios({
                url: `https://thewiseowl.pythonanywhere.com/api/store_owner/customer_data/?limit=3&page=${currentPage}&pageSize=${pageSize}`,
                data: {

                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('salesmen', result.data);
                setCustomerGetData(result.data)
                setAllData(result.data)
                setStoreData(result.data.slice(0, 10))
                setNumberOfPages(Math.ceil(result.data.length / 10))
            })
        }
    }, [getStoreAdminToken, currentPage, pageSize])

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };


    const handlePageClick = async (data1) => {
        console.log('click');
        console.log('pagecount3', data1.selected);
        const data = allData.slice(data1.selected * 10, (data1.selected + 1) * 10)
        setStoreData(data)
    };

    // const handleDelete = (e, id) => {
    //     const accessToken = getStoreAdminToken?.tokens?.access;
    //     console.log('acces', accessToken);
    //     axios({
    //         url: ` https://thewiseowl.pythonanywhere.com/api/store_owner/customer_data/`,
    //         data: {
    //             "id": id
    //         },
    //         headers: {
    //             Authorization: `Bearer ${accessToken}`
    //         },
    //         method: 'delete'
    //     }).then((result) => {
    //         console.log('salesmen', result.data);

    //     })
    // }
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
                {/* <!-- Dashboard Charts Section  --> */}
                <div class="table-data-wrapper">
                    <h5>All Customer Data</h5>
                    <div class="table-inner-content table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone number</th>
                                    <th>Product Choice</th>
                                    <th>Sales Person Name</th>
                                    <th>Description</th>
                                    <td>Action</td>


                                </tr>
                            </thead>
                            <tbody>
                                {storeData && storeData?.map((val) => (
                                    <tr>
                                        <td>{val?.id}</td>
                                        <td>{val?.name}</td>
                                        <td>{val?.email}</td>
                                        <td>{val?.phone_number}</td>
                                        <td>{val?.visit_type}</td>

                                        <td>{val?.salesperson_name}</td>
                                        <td>{val?.description}</td>
                                        {/* <td onClick={(e) => handleDelete(e, val.id)}>Delete</td> */}
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

export default DashboardCustomerData