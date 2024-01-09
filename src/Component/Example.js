import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#8299DD', '#4BA3DD'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="middle">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const Example = () => {
    const [shopper, setShopper] = useState([]);
    const getStoreAdminToken = useSelector((state) => state?.storeAdminLogin?.storeAdmin.access);

    const handleShopper = () => {
        if (getStoreAdminToken) {
            axios({
                url: 'https://thewiseowl.pythonanywhere.com/sales-representative-percentage-visit-count/',
                data: {},
                headers: {
                    Authorization: `Bearer ${getStoreAdminToken}`,
                },
                method: 'get',
            })
                .then((result) => {
                    console.log('shopper', result.data);
                    setShopper([
                        { name: 'Shopper', value: result.data.total_shopping_percentage },
                        { name: 'Visitor', value: result.data.total_visitor_percentage },
                    ]);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    };

    useEffect(() => {
        // Fetch shopper data on component mount
        handleShopper();
    }, []); // Empty dependency array ensures the effect runs once on mount

    const handleExcel = () => {
        // Handle Excel export logic
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className="title-customerdata-exportbtn color-pilot-name-customer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '12px', textAlign: 'left' }}>Shopper and Visitor</span>
                {/* <button className="customer-data-btn-download" onClick={() => handleExcel()}>
                    Export CVS
                </button> */}
            </div>
            <div className="color-pilot-name-customer">
                <span className="dot"></span>&nbsp;
                <p style={{ fontSize: '8px', marginBottom: '0px' }} onClick={handleShopper}>

                    Shopper
                </p>
            </div>
            <div className="color-pilot-name-visitor">
                <span className="dot" style={{ backgroundColor: '#8AC3E9' }}></span>&nbsp;
                <p style={{ fontSize: '8px', marginBottom: '0px' }}>Visitor</p>
            </div>
            <PieChart width={100} height={100}>
                <Pie
                    data={shopper}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {shopper.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Example;
