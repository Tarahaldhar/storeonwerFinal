import React from 'react'

const DashboardCard = () => {
    return (
        <>
            {/* <!-- Dashbaord card section  --> */}
            <div class="dashbard-inner-card">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Total Customer</h2>
                            </div>
                            <div class="middle-text">
                                <span>50%</span>
                                Visitors
                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Total Visitors</h2>
                            </div>
                            <div class="middle-text">
                                <span>37%</span>
                                Visitors
                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="card-inner">
                            <div class="top-content">
                                <h2>Conversion Rate</h2>
                            </div>
                            <div class="middle-text">
                                <span>25%</span>

                            </div>
                            <p class="text-gray">
                                <span class="per-count">+4%</span> vs. last month
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
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
                    </div>
                </div>
            </div>
            {/* <!-- Dashboard Charts Section  --> */}
        </>
    )
}

export default DashboardCard