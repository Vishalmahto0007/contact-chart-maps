import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useQuery } from 'react-query';
import { fetchHistoricalCovidAllDays } from '../../services/chartsAndMaps';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};


const LineGraph = () => {

    const { isLoading, data, isError, error } = useQuery('covid-cases-history', fetchHistoricalCovidAllDays)

    const labels = data && Object.keys(data?.data?.cases); // Data of covid cases for graph labels.

    const lineData = {
        labels,
        datasets: [
            {
                label: 'Covid Cases',
                data: data && Object.values(data?.data?.cases),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    return (
        <div>
            <div className="flex justify-center m-8">
                <div className='w-9/12 h-9/12'>
                    <Line options={options} data={lineData} />
                </div>
            </div>
        </div>

    );
};

export default LineGraph;










