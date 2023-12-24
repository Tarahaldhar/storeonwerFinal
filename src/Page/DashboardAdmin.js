import React from 'react';
import './Dashboard.css';
import Sidebarr from '../Component/Sidebarr';
import DashboardMainContent from '../Component/DashboardMainContent';

const DashboardAdmin = () => {
    return (
        <div>
            <main>
                <section class="main-dashboard">
                    <Sidebarr />
                    <DashboardMainContent />
                </section>
            </main>

        </div>
    )
}

export default DashboardAdmin