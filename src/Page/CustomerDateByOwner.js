import React from 'react'
import Sidebarr from '../Component/Sidebarr';
import CustomerDataRecieveByOwner from '../Component/CustomerDataRecieveByOwner';
const CustomerDateByOwner = () => {
    return (
        <>
            <main>
                <section class="main-dashboard">
                    <Sidebarr />
                    <CustomerDataRecieveByOwner />
                </section>
            </main>
        </>
    )
}

export default CustomerDateByOwner