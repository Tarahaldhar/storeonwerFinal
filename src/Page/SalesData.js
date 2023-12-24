import React from 'react'
import Sidebarr from '../Component/Sidebarr';
import DashboardMainContent from '../Component/DashboardMainContent';
import DashboardMainSalesData from '../Component/DashboardMainSalesData';

const SalesData = () => {
    return (
        <>
            <main>
                <section class="main-dashboard">
                    <Sidebarr />
                    <DashboardMainSalesData />
                </section>
            </main>
        </>
    )
}

export default SalesData