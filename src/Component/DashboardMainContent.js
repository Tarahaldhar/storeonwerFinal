import React, { useState } from 'react';
import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';
import DashboardChart from './DashboardChart';

const DashboardMainContent = () => {
    const [showSidebar, setShowSidebar] = useState(false)
    const handleToggle = () => {
        setShowSidebar(!showSidebar)
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
                        <div class="title" style={{ textAlign: 'left', margin: '20px' }}>
                            <h5 class="mb-0">Customer Habits</h5>
                            <p class="text-gray">Track your Customer behavior</p>
                        </div>
                    </div>
                    <div class="cart-wrapper">
                        <DashboardChart />
                        {/* <canvas id="myChart"></canvas> */}
                    </div>
                </div>

            </section>
        </>
    )
}

export default DashboardMainContent