import React, { useState } from 'react';
import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';
import DashboardChart from './DashboardChart';
import ReactPaginate from 'react-paginate';
import DashboardCustomerData from './DashboardCustomerData';
import Example from './Example';
import DashboardVisitorData from './DashboardVisitorData';
import SimpleLineChart from './SimpleLineChart';

const DashboardMainContent = () => {


    const [storeData, setStoreData] = useState();
    const [numberOfPages, setNumberOfPages] = useState(1)
    const [allData, setAllData] = useState([])
    const [showSidebar, setShowSidebar] = useState(false)
    const handleToggle = () => {
        setShowSidebar(!showSidebar)
    }

    const handlePageClick = (data1) => {
        console.log('click');
        console.log('pagecount3', data1.selected);
        const data = allData.slice(data1.selected * 10, (data1.selected + 1) * 10)
        setStoreData(data.slice(0, 10))
    }
    return (
        <>
            <section className={`Dashboard-wrapper ${showSidebar ? 'active' : ''}`}>
                {/* <!-- dashboard header section  --> */}
                {/* <!-- dashboard header section  --> */}
                <DashbaordHeader />
                {/* <!-- Dashbaord card section  --> */}
                <DashboardCard />
                {/* <!-- Dashboard Charts Section  --> */}
                {/* <!-- Dashboard Charts Section  --> */}
                <div class="dashboard-charts-wrapper">
                    <div class="top-section">
                        <div class="title" style={{ textAlign: 'left', margin: '10px', paddingTop: '15px' }}>
                            <h5 class="mb-0" style={{ fontSize: '18px' }}>Customer Count</h5>
                            <p class="text-gray" style={{ fontSize: '12px' }}>Track your Monthly Customer Footfall</p>
                        </div>
                    </div>
                    <div class="cart-wrapper">
                        <DashboardChart />
                        {/* <canvas id="myChart"></canvas> */}
                    </div>
                </div>
                <br />
                {/*--------------all customer data--------  */}
                <h5 style={{ textAlign: 'left', paddingLeft: '10px', padding: '10px', marginTop: '20px', marginLeft: '20px' }}>Sales Performance</h5>
                <div className='piechart-parent'>

                    <div className='dashboard-charts-wrapper'>
                        {/* <DashboardCustomerData showHeader={true} /> */}
                        <SimpleLineChart />
                    </div>

                    <div className='piechart-div'>
                        <p style={{ fontWeight: '600', marginBottom: '0px' }}>Customer Count</p>

                        <Example />
                    </div>

                </div>
                <br />
                {/* -------------All Visitor Data----------- */}

                {/* <DashboardVisitorData /> */}

                {/* -------------all visitor data---------- */}

            </section>

        </>
    )
}

export default DashboardMainContent