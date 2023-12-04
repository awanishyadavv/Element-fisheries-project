import './ChartHorizontal.css'
import React from 'react';
import {Chart as ChartJs} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import revenueData from './revenueData.json';

const Chart = () => {
    const parameter = 'Tank No __';
    const xaxislabel = ['0 hrs', '1 hrs', '2 hrs', '3 hrs', '4 hrs', '5 hrs', '6 hrs', '7 hrs', '8 hrs', '9 hrs', '10 hrs', '11 hrs'];
    const revenueValues = revenueData.map(data => data.revenue);


    const chartData = {
        labels: xaxislabel,
        datasets: [
            {
                label: 'Temprature',
                data: revenueValues,
                backgroundColor: '#064FF0',
                borderColor: '#064FF0',
                tension: 0.3,
            },
        ],
    };


    const options = {
        scales: {
            y: {
                beginAtZero: false,
                max: 50,  // Set the maximum value for y-axis
                min: 0,  // Set the minimum value for y-axis
                ticks:{
                    stepSize:5,
                }
            },
        },
    };

    return (
        <div  className='chart'>
        <Line 
        data={chartData} options={options}
        />
        <h4>{parameter}</h4>
        </div>
    );
}

export default Chart;