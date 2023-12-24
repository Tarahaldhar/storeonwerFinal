import React, { useState } from 'react';
import DashbaordHeader from './DashbaordHeader';
import DashboardCard from './DashboardCard';

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
                        <div class="title">
                            <h3 class="mb-0">Customer Habits</h3>
                            <p class="text-gray">Track your Customer behavior</p>
                        </div>
                    </div>
                    <div class="cart-wrapper">
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardMainContent