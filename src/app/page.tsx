// app/page.tsx
'use client';

import { useState } from 'react';
import { Cloud, Sun, Sunset, Menu, Info, Search, X, Heart } from 'lucide-react';
import stateData from '@/app/data/StateData';
import { motion, AnimatePresence } from 'framer-motion';
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
import Link from 'next/link';
import HamburgerMenu from '@/components/HamburgerMenu';


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

// List of US States
const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
];

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [state, setState] = useState('Georgia');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStates, setFilteredStates] = useState<string[]>([]);
    const [iliIndex, setIliIndex] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() !== '') {
            const matches = US_STATES.filter(state =>
                state.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredStates(matches);
        } else {
            setFilteredStates([]);
        }
    };

    const handleSelectState = async (selectedState: string) => {
        setState(selectedState);
        setSearchTerm('');
        setFilteredStates([]);
        setIliIndex(null);
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ state: selectedState })
            });

        if (!response.ok) {
            throw new Error("State not found or API error.");
        }

        const data = await response.json();
        setIliIndex(data.predicted_ILI_total);
    } catch (err: any) {
        setError(err.message || "Failed to fetch data.");
    } finally {
        setLoading(false);
    }
};

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
            <HamburgerMenu />

            {/* Search Bar*/}
            <div className="flex items-center justify-end space-x-4 mb-4">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white opacity-60" />
                    <input
                        type="text"
                        placeholder="Search for a US state"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full bg-white bg-opacity-20 backdrop-blur-md rounded-full py-2 pl-10 pr-4 text-white placeholder-white focus:outline-none"
                    />
                    {filteredStates.length > 0 && (
                        <ul className="absolute left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
                            {filteredStates.map((state) => (
                                <li
                                    key={state}
                                    onClick={() => handleSelectState(state)}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:bg-opacity-50 transition duration-200 text-black"
                                >
                                    {state}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Location and Temperature */}
            <div className="text-center space-y-2">
                <p className="text-sm text-white tracking-wider">MY LOCATION</p>
                <h1 className="text-6xl font-light text-white">{state}</h1>
                <div className="flex items-center justify-center space-x-2 relative">
                     {/* ILI Index Display (Replaces 52°) */}
                     {loading ? (
                        <p className="text-7xl font-thin text-white">...</p>
                    ) : error ? (
                        <p className="text-2xl text-red-500">{error}</p>
                    ) : iliIndex !== null ? (
                        <p className="text-7xl font-thin text-white">{iliIndex.toFixed(1)}</p>
                    ) : (
                        <p className="text-7xl font-thin text-white">--</p> // Default when no state is selected
                    )}

                    {/* Tooltip Icon */}
                    <div className="relative group">
                        <Info className="text-white w-6 h-6 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer" />
                        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center">
                            <div className="bg-white bg-opacity-20 backdrop-blur-md text-xs text-white rounded-md px-2 py-1 shadow-md">
                                Current Index
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
                    ].map((day) => (
                        <div key={day.day} className="flex items-center justify-between text-white">
                            <p className="w-1/6">{day.day}</p>
                            <div className="w-1/6 flex justify-center">{day.icon}</div>
                            <p className="w-1/6 text-right">{day.low}</p>
                            <p className="w-1/6 text-right">{day.high}</p>
                        </div>
                    ))}
                </div>
            </div>

             {/* Footer Text */}
             <div className="text-center text-white mt-6">
                Built with <span className="text-red-500">&#x2764;&#xFE0F;</span> at GT Hacklytics 2025
            </div>
        </div>
    );
}