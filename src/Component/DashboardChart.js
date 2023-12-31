import React, { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { Paper, Typography } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';


// Sample data for the bar chart
const data = [
    { name: 'January', value: 10 },
    { name: 'February', value: 20 },
    { name: 'March', value: 45 },
    { name: 'April', value: 50 },
    { name: 'May', value: 20 },
    { name: 'June', value: 30 },
    { name: 'July', value: 40 },
    { name: 'August', value: 50 },
    { name: 'September', value: 60 },
    { name: 'October', value: 70 },
    { name: 'Novemeber', value: 55 },
    { name: 'December', value: 76 },
    // Add more data as needed
];
const DashboardChart = () => {
    const [graphData, setGraphData] = useState()
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin?.access)

    // useEffect(() => {
    //     if (getStoreAdminToken) {
    //         console.log('salestoken', getStoreAdminToken);
    //         axios({
    //             url: `https://thewiseowl.pythonanywhere.com/api/monthly-registration-count/`,
    //             data: {

    //             },
    //             headers: {
    //                 Authorization: `Bearer ${getStoreAdminToken}`
    //             },
    //             method: 'get'
    //         }).then((result) => {
    //             console.log('salesmen', result.data.customers);
    //             setGraphData(result.data.customers)

    //         })
    //     }
    // }, [getStoreAdminToken])
    return (
        <>
            <Paper elevation={3} style={{ padding: 0, marginBottom: 0, fontSize: '10px' }}>
                <Typography variant="h6" gutterBottom>
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#4BA3DD
" />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>

        </>
    )
}

export default DashboardChart