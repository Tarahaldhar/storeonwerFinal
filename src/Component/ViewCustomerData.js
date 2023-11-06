import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';

import ReactPaginate from 'react-paginate';

import axios from 'axios';
import { current } from '@reduxjs/toolkit';

const ViewCustomerData = () => {
    const [CustData, SetCustData] = useState([])
    const [accordian, setAccordian] = useState(null)
    const navigate = useNavigate()
    let limit = 2;
    const [allData, setAllData] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(1)
    const [storeData, setStoreData] = useState();
    const getTokenfromstore = useSelector(state => state?.storeAdminLogin?.storeAdmin)
    console.log('access', getTokenfromstore);
    const fetchData = ((currentPage) => {
        const accessToken = getTokenfromstore?.tokens?.access;

        axios({
            'url': `http://127.0.0.1:8000/customer/register?_page=${currentPage}$_limit=${limit}/`,
            data: {

            },
            method: "get",
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then((result) => {
            console.log('viewcustomer', result.data);
            setAllData(result.data)
            setStoreData(result.data.slice(0, 10))
            setNumberOfPages(Math.ceil(result.data.length / 10))

        }).catch((error) => {
            console.log('error', error);

        })
    })
    useEffect(() => {
        fetchData()
    }, [])

    const handlePageClick = async (data1) => {
        console.log('click');
        console.log('pagecount3', data1.selected);
        const data = allData.slice(data1.selected * 10, (data1.selected + 1) * 10)
        setStoreData(data)
    };
    const handleUserData = (e, index) => {
        SetCustData(allData[index].customers)
        console.log('alldata', allData[index]);
        console.log('e', e, index);
        index === accordian ? setAccordian(null) : setAccordian(index)
    }

    
    return (
        <div>
            {/* --------------------Navigation bar start------------------------------ */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div className='logo-admin' >
                        <Link to="/">
                            <img style={{ width: '60px', height: '60px' }} className='logothe-wise-owl' src='img/lglogo.png' />
                        </Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li> */}

                        </ul>
                        <span className="navbar-text">
                            <Link to={'/customerjorney'}>
                                <i style={{ color: '#cc0033' }} className="fa-solid fa-backward" navigate='/'></i>
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
            {/* -----------------------------Navigation bar end------------------------ */}

            <table className="table" style={{ border: '1px solid #ccc' }}>
                <thead style={{ backgroundColor: '#cc0033', color: '#fff' }}>
                    <tr>
                        <th scope="col">Total Customer</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Sales Person Name</th>
                    </tr>
                </thead>
                <tbody>
                    {storeData?.map((val, index) => (

                        <>
                            <div onClick={(e) => handleUserData(e, index)}>
                                {`${val?.salesperson_name} `}
                                <div className='count-customer'>
                                    {`${val?.customer_count}`}
                                </div>
                            </div>

                            {index === accordian && CustData?.map((val) => (

                                <tr>
                                    <th scope="row">{val.id}</th>
                                    <td>{val?.name}</td>
                                    <td>{val?.email}</td>
                                    <td>{val?.phone_number}</td>
                                    <td>{val?.salesperson_name}</td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
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
            </table>
            <div className="mb-3" id="ftr">
                <p className="footer" style={{ marginBottom: '0px' }}>Developed by Electrogets Technologies Pvt Ltd © 2023. All rights reserved by The Wise Owl</p>
            </div>
        </div>
    )
}

export default ViewCustomerData