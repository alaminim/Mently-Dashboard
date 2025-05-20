'use client';

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ['Students', 'Others', 'Programs', 'Mentors'];
const colors = ['#60a5fa', '#34d399', '#fbbf24', '#f87171'];

const generateRandomData = (count: number) => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * 100));
};

const DoughnutChart = () => {
  const dataValues = generateRandomData(labels.length);

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: colors,
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutout: '65%',
    plugins: {
      legend: {
        display: false, // hide internal legend
      },
    },
  };

  return (
    <div className="flex flex-row items-center gap-4">
      {/* Chart */}
      <div className="w-42 h-42">
        <Doughnut data={data} options={options} />
      </div>

      {/* Custom Legend */}
      <div className="flex flex-col gap-2">
        {labels.map((label, i) => (
          <div key={label} className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[i] }} />
            <span className="font-medium text-gray-800 text-center">{label}</span>
            <span className="text-gray-950 ml-2 font-bold text-justify ">{dataValues[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
