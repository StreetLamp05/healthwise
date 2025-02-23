// components/HeatMap.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { FeatureCollection, Geometry, GeoJsonProperties } from 'geojson';
import stateData from '@/app/data/StateData'; // Import StateData

// State Name to State Code Mapping
const stateNameToCode: Record<string, string> = {
    "Alabama": "AL", "Alaska": "AK", "Arizona": "AZ", "Arkansas": "AR", "California": "CA",
    "Colorado": "CO", "Connecticut": "CT", "Delaware": "DE", "Florida": "FL", "Georgia": "GA",
    "Hawaii": "HI", "Idaho": "ID", "Illinois": "IL", "Indiana": "IN", "Iowa": "IA",
    "Kansas": "KS", "Kentucky": "KY", "Louisiana": "LA", "Maine": "ME", "Maryland": "MD",
    "Massachusetts": "MA", "Michigan": "MI", "Minnesota": "MN", "Mississippi": "MS", "Missouri": "MO",
    "Montana": "MT", "Nebraska": "NE", "Nevada": "NV", "New Hampshire": "NH", "New Jersey": "NJ",
    "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", "Ohio": "OH",
    "Oklahoma": "OK", "Oregon": "OR", "Pennsylvania": "PA", "Rhode Island": "RI", "South Carolina": "SC",
    "South Dakota": "SD", "Tennessee": "TN", "Texas": "TX", "Utah": "UT", "Vermont": "VT",
    "Virginia": "VA", "Washington": "WA", "West Virginia": "WV", "Wisconsin": "WI", "Wyoming": "WY"
};

// FIPS to State Code Mapping
const fipsToState: Record<string, string> = {
    "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA",
    "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL",
    "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN",
    "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME",
    "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS",
    "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH",
    "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND",
    "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI",
    "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT",
    "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI",
    "56": "WY"
};

const HeatMap = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [data, setData] = useState<Record<string, number>>({});

    // Function to fetch prediction for each state
    const fetchPredictions = async () => {
        const newData: Record<string, number> = {};

        // Loop through each state in stateData
        for (const [stateName, stateDetails] of Object.entries(stateData)) {
            const stateCode = stateNameToCode[stateName];
            const payload = {
                state: stateName,
                population: stateDetails.population,
                median_income: stateDetails.median_income,
                ili_lag_1: stateDetails.ili_lag_1,
                ili_lag_2: stateDetails.ili_lag_2,
                ili_lag_3: stateDetails.ili_lag_3,
                ili_lag_4: stateDetails.ili_lag_4,
                ili_rolling_mean: stateDetails.ili_rolling_mean,
                week: 8
            };

            try {
                const response = await fetch("http://127.0.0.1:5000/predict", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });
                const result = await response.json();
                // Store the prediction
                newData[stateCode] = result.predicted_ILI_total;
            } catch (error) {
                console.error(`Error fetching data for state ${stateName}:`, error);
            }
        }

        // Update the state with new data
        setData(newData);
    };

    useEffect(() => {
        fetchPredictions();
    }, []);

    useEffect(() => {
        const width = 960;
        const height = 600;

        const svg = d3.select(svgRef.current)
            .attr('viewBox', `0 0 ${width} ${height}`)
            .style('width', '100%')
            .style('height', 'auto');

        // Clear previous contents before re-drawing
        svg.selectAll('*').remove();

        // Load TopoJSON and convert to GeoJSON
        d3.json('/data/us-states-topo.json').then((us: any) => {
            const geoData = topojson.feature(us, us.objects.states) as unknown as FeatureCollection<Geometry, GeoJsonProperties>;

            // Projection and Path Generator
            const projection = d3.geoAlbersUsa().fitSize([width, height], geoData);
            const path = d3.geoPath().projection(projection);

            // Get Data Values for Color Scale
            const dataValues = Object.values(data);
            const minValue = Math.min(...dataValues);
            const maxValue = Math.max(...dataValues);

            // Color Scale
            const colorScale = d3.scaleSequential(d3.interpolateYlOrRd)
                .domain([minValue, maxValue]);

            // Draw States
            svg.selectAll('path')
                .data(geoData.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', (d) => {
                    // Map FIPS Code to State Code
                    const stateId = d.id ? fipsToState[d.id.toString()] : '';
                    const value = stateId ? data[stateId] : 0;
                    return value ? colorScale(value) : '#ccc'; // Grey for no data
                })
                .attr('stroke', '#fff')
                .attr('stroke-width', 0.5)
                .on('mouseover', function (event, d) {
                    const stateId = d.id ? fipsToState[d.id.toString()] : '';
                    d3.select(this).attr('stroke-width', 1);
                    d3.select('#tooltip')
                        .style('left', `${event.pageX + 10}px`)
                        .style('top', `${event.pageY - 20}px`)
                        .style('display', 'block')
                        .html(`${stateId}: ${data[stateId] || 'No Data'}`);
                })
                .on('mouseout', function () {
                    d3.select(this).attr('stroke-width', 0.5);
                    d3.select('#tooltip').style('display', 'none');
                });
        }).catch((error) => {
            console.error('Error loading TopoJSON:', error);
        });
    }, [data]);

    return (
        <div className="relative">
            <svg ref={svgRef}></svg>
            <div
                id="tooltip"
                className="absolute text-white text-sm bg-gray-800 p-2 rounded hidden pointer-events-none"
            ></div>
        </div>
    );
};

export default HeatMap;
