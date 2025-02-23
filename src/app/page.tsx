// app/page.tsx
'use client';

import { useState } from 'react';
import { Cloud, Sun, Sunset, Menu, Info } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Heatmap Data
  const labels = [
    '12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '6PM', '9PM',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: [46, 44, 42, 49, 52, 56, 50, 48],
        fill: true,
        backgroundColor: 'rgba(136, 51, 176, 0.2)',
        borderColor: 'rgb(158, 82, 82)',
        pointBackgroundColor: 'rgb(175, 164, 164)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 255, 255)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#fff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 relative">
      {/* Floating Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-md rounded-full p-3 shadow-md transition duration-300 z-10"
      >
        <Menu className="text-white w-6 h-6" />
      </button>

      {/* Location and Temperature */}
      <div className="text-center space-y-2">
        <p className="text-sm text-white tracking-wider">MY LOCATION</p>
        <h1 className="text-6xl font-light text-white">Atlanta</h1>
        
        <div className="flex items-center justify-center space-x-2 relative">
          <p className="text-7xl font-thin text-white">52°</p>
          
          {/* Tooltip Icon */}
          <div className="relative group">
            <Info className="text-white w-6 h-6 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer" />
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center">
              <div className="bg-white bg-opacity-20 backdrop-blur-md text-xs text-white rounded-md px-2 py-1 shadow-md">
                Current Temperature
              </div>
              <div className="w-2 h-2 bg-white bg-opacity-20 backdrop-blur-md transform rotate-45 mt-[-4px]"></div>
            </div>
          </div>
        </div>

        <p className="text-md text-white">
          Feels Like: 44° | H: 52° L: 26°
        </p>
      </div>

      {/* Combined Weather Description and Hourly Forecast */}
      <div className="bg-white bg-opacity-15 rounded-2xl p-4 backdrop-blur-md">
        <p className="text-sm text-white mb-3">
          Sunny conditions expected around 4PM. Wind gusts up to 13 mph are making the temperature feel like 44°.
        </p>
        <div className="mt-4 border-t border-white pt-3">
          <p className="text-sm text-white mb-3 tracking-wider">HOURLY FORECAST</p>
          <div className="flex overflow-x-scroll space-x-4">
            {[
              { time: 'Now', icon: <Cloud />, temp: '52°' },
              { time: '4PM', icon: <Sun />, temp: '52°' },
              { time: '5PM', icon: <Cloud />, temp: '51°' },
              { time: '6PM', icon: <Sun />, temp: '49°' },
              { time: '6:28PM', icon: <Sunset />, temp: 'Sunset' },
              { time: '7PM', icon: <Cloud />, temp: '46°' },
            ].map((hour) => (
              <div
                key={hour.time}
                className="flex flex-col items-center text-white space-y-1"
              >
                <p className="text-xs text-white">{hour.time}</p>
                <div className="w-8 h-8">{hour.icon}</div>
                <p className="text-sm text-white">{hour.temp}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* J3 Heatmap Section */}
      <div className="bg-white bg-opacity-15 rounded-2xl p-4 backdrop-blur-md">
        <p className="text-sm text-white mb-3 tracking-wider">J3 HEATMAP</p>
        <Line data={data} options={options} />
      </div>

      {/* 10-Day Forecast */}
      <div className="bg-white bg-opacity-15 rounded-2xl p-4 backdrop-blur-md">
        <p className="text-sm text-white mb-3 tracking-wider">10-DAY FORECAST</p>
        <div className="space-y-2">
          {[
            { day: 'Today', icon: <Sun />, low: '26°', high: '52°', progress: 'w-2/4 bg-blue-400' },
            { day: 'Sun', icon: <Cloud />, low: '30°', high: '54°', progress: 'w-3/4 bg-blue-500' },
            { day: 'Mon', icon: <Sun />, low: '38°', high: '61°', progress: 'w-4/5 bg-green-400' },
            { day: 'Tue', icon: <Sun />, low: '41°', high: '67°', progress: 'w-5/6 bg-yellow-400' },
          ].map((day) => (
            <div
              key={day.day}
              className="flex items-center justify-between text-white"
            >
              <p className="w-1/6 text-white">{day.day}</p>
              <div className="w-1/6 flex justify-center">{day.icon}</div>
              <div className="w-2/6 flex items-center space-x-2">
                <p className="text-white">{day.low}</p>
                <div className="flex-1 h-1 bg-gray-500 rounded-full relative">
                  <div className={`${day.progress} h-full rounded-full absolute left-0`}></div>
                </div>
                <p className="text-white">{day.high}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
