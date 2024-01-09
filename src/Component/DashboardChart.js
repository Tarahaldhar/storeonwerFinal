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
    { name: 'January', Month: 0 },
    { name: 'February', Month: 0 },
    { name: 'March', Month: 0 },
    { name: 'April', Month: 0 },
    { name: 'May', Month: 0 },
    { name: 'June', Month: 0 },
    { name: 'July', Month: 0 },
    { name: 'August', Month: 0 },
    { name: 'September', Month: 0 },
    { name: 'October', Month: 0 },
    { name: 'Novemeber', Month: 0 },
    { name: 'December', Month: 0 },
    // Add more data as needed
];
const DashboardChart = () => {
    const [graphData, setGraphData] = useState(data)
    const getStoreAdminToken = useSelector(state => state?.storeAdminLogin?.storeAdmin?.access)

    useEffect(() => {
        if (getStoreAdminToken) {
            console.log('salestoken', getStoreAdminToken);
            axios({
                url: `https://thewiseowl.pythonanywhere.com/api/monthly-registration-count/`,
                data: {

                },
                headers: {
                    Authorization: `Bearer ${getStoreAdminToken}`
                },
                method: 'get'
            }).then((result) => {
                console.log('salesmen', result.data);
                const data = result.data.map((val) => {
                    return { name: val.month, "Total Customer Count": val.count }
                })
                setGraphData(data)

            })
        }
    }, [getStoreAdminToken])
    return (
        <>
            <Paper elevation={3} style={{ padding: 0, marginBottom: 0, fontSize: '10px' }}>
                <Typography variant="h6" gutterBottom>
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={graphData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Total Customer Count" fill="#4BA3DD" barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </Paper>

        </>
    )
}

export default DashboardChart