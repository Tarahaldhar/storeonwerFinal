import React from 'react';
import Sidebarr from '../Component/Sidebarr';
import DashboardMainSalesCreate from '../Component/DashboardMainSalesCreate';
const SalesRegister = () => {
    return (
        <>
            <main>
                <section class="main-dashboard">
                    <Sidebarr />
                    <DashboardMainSalesCreate />
                </section>
            </main>
        </>
    )
}

export default SalesRegister