import React from 'react';
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
    return (
        <>
            <Paper elevation={3} style={{ padding: 30, marginBottom: 30 }}>
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