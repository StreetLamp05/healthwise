"use client";

import { useEffect, useState } from "react";
import * as d3 from "d3";
import usMap from "@/data/us-states.js"; // Load GeoJSON map of US states

const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];

export default function USHeatmap() {
    const [iliData, setIliData] = useState<Record<string, number>>({});

    useEffect(() => {
        const fetchILI = async () => {
            let data: Record<string, number> = {};

            for (const state of US_STATES) {
                try {
                    const response = await fetch("http://127.0.0.1:8000/predict", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ state })
                    });

                    if (!response.ok) throw new Error(`Failed to fetch ${state}`);

                    const result = await response.json();
                    data[state] = result.predicted_ILI_total;
                } catch (error) {
                    console.error(`Error fetching ILI for ${state}:`, error);
                    data[state] = 0; // Default to 0 if API fails
                }
            }

            setIliData(data);
        };

        fetchILI();
    }, []);

    useEffect(() => {
        if (Object.keys(iliData).length === 0) return;

        const width = 900;
        const height = 600;

        const svg = d3
            .select("#us-map")
            .attr("width", width)
            .attr("height", height);

        const projection = d3.geoAlbersUsa().scale(1000).translate([width / 2, height / 2]);
        const path = d3.geoPath().projection(projection);

        const colorScale = d3
            .scaleLinear<string>()
            .domain([d3.min(Object.values(iliData)) || 0, d3.max(Object.values(iliData)) || 1])
            .range(["green", "red"]);

        svg.selectAll("path")
            .data(usMap.features)
            .enter()
            .append("path")
            .attr("d", path as any)
            .attr("fill", d => {
                const stateName = d.properties.name;
                return iliData[stateName] ? colorScale(iliData[stateName]) : "gray";
            })
            .attr("stroke", "white")
            .on("mouseover", function (event, d) {
                const stateName = d.properties.name;
                const ili = iliData[stateName] || "N/A";

                d3.select("#tooltip")
                    .style("left", `${event.pageX + 10}px`)
                    .style("top", `${event.pageY + 10}px`)
                    .style("opacity", 1)
                    .html(`<strong>${stateName}</strong><br>ILI: ${ili}`);
            })
            .on("mouseout", function () {
                d3.select("#tooltip").style("opacity", 0);
            });

    }, [iliData]);

    return (
        <div className="relative">
            <svg id="us-map"></svg>
            <div id="tooltip" className="absolute bg-white text-black p-2 rounded shadow-lg opacity-0"></div>
        </div>
    );
}
