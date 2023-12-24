import React from 'react'
import Sidebarr from '../Component/Sidebarr';
import DashboardMainContent from '../Component/DashboardMainContent';
import DashboardCustomerData from '../Component/DashboardCustomerData';

const SalesData = () => {
    return (
        <>
            <main>
                <section class="main-dashboard">
                    <Sidebarr />
                    <DashboardCustomerData />
                </section>
            </main>
        </>
    )
}

export default SalesData