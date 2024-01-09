import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const DashboardCard = () => {
    const [footfall, setFootfall] = useState([])
    const [shopper, setShopper] = useState([])
    const [visitor, setVisitor] = useState([])
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin.access)

    useEffect(() => {
        handleTotalFootfall();
        handleTotalShopper();
        handleVisitor();
    }, [])


    const handleTotalFootfall = () => {
        if (getStoreAdminToken) {
            axios({
                url: 'https://thewiseowl.pythonanywhere.com/api/store-owner/customer-count/',
                data: {

                },
                headers: {
                    Authorization: `Bearer ${getStoreAdminToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('footfall', result.data);
                // Check if result.data is an array or a single item
                const dataToSet = Array.isArray(result.data) ? result.data : [result.data];

                setFootfall(dataToSet);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
    }


    const handleTotalShopper = () => {
        if (getStoreAdminToken) {
            axios({
                url: 'https://thewiseowl.pythonanywhere.com//api/store_owner/customer/shopping/',
                data: {

                },
                headers: {
                    Authorization: `Bearer ${getStoreAdminToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('shopper', result.data);
                // Check if result.data is an array or a single item
                const dataToSet = Array.isArray(result.data) ? result.data : [result.data];

                setShopper(dataToSet);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
    }


    const handleVisitor = () => {
        if (getStoreAdminToken) {
            axios({
                url: 'https://thewiseowl.pythonanywhere.com/api/store_owner/customer/visitor/',
                data: {

                },
                headers: {
                    Authorization: `Bearer ${getStoreAdminToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('visitor', result.data);
                // Check if result.data is an array or a single item
                const dataToSet = Array.isArray(result.data) ? result.data : [result.data];
                setVisitor(dataToSet);
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
        }
    }
    return (
        <>
            {/* <!-- Dashbaord card section  --> */}
            <div class="dashbard-inner-card">
                <div class="row" id="cart-header-three-box">
                    <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Total Count</h2>
                            </div>
                            <div class="middle-text">
                                <span onClick={() => handleTotalFootfall()}>
                                    {footfall?.map((val) => (
                                        <div key={val?.id}>{val?.customer_count}</div>
                                    ))}
                                </span>
                                Footfall
                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Total Shopper</h2>
                            </div>
                            <div class="middle-text">
                                <span onClick={() => handleTotalShopper()}>
                                    {shopper?.map((val) => (
                                        <div key={val.id}>{val?.customer_count}</div>
                                    ))}
                                </span>
                                Shopper
                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Total Visitor</h2>
                            </div>
                            <div class="middle-text">
                                <span onClick={() => handleVisitor()}>
                                    {visitor?.map((val) => (
                                        <div>{val?.customer_count}</div>
                                    ))}
                                </span>
                                Visitor
                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div>
                    {/* <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Messages Delivered</h2>
                            </div>
                            <div class="middle-text">
                                <span>42%</span>

                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <!-- Dashboard Charts Section  --> */}
        </>
    )
}

export default DashboardCard