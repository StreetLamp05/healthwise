// components/ChoroplethMap.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { FeatureCollection, Geometry } from 'geojson';

// Example data for choropleth (state codes with corresponding values)
const data: Record<string, number> = {
    CA: 85, TX: 90, NY: 75, FL: 88, IL: 78, PA: 70, OH: 72, GA: 85, NC: 83, MI: 68,
    NJ: 76, VA: 82, WA: 65, AZ: 95, MA: 74, TN: 84, IN: 73, MO: 80, MD: 78, WI: 66,
    CO: 77, MN: 64, SC: 87, AL: 86, LA: 88, KY: 79, OR: 63, OK: 89, CT: 71, IA: 67,
    UT: 92, NV: 94, AR: 85, MS: 88, KS: 84, NM: 91, NE: 81, WV: 70, ID: 93, HI: 85,
    ME: 60, NH: 62, MT: 61, RI: 74, DE: 75, SD: 69, ND: 64, AK: 58, VT: 59, WY: 62,
};

const HeatMap = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);

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
            const geoData = topojson.feature(us, us.objects.states) as unknown as FeatureCollection<Geometry>;

            // Debugging Log: Check GeoJSON Data
            console.log('GeoJSON Data:', geoData);

            // Projection and Path Generator
            const projection = d3.geoAlbersUsa().fitSize([width, height], geoData);
            const path = d3.geoPath().projection(projection);

            // Get Data Values for Color Scale
            const dataValues = Object.values(data);
            const minValue = Math.min(...dataValues);
            const maxValue = Math.max(...dataValues);

            // Debugging Log: Check Color Scale Domain
            console.log('Color Scale Domain:', minValue, maxValue);

            // Color Scale
            const colorScale = d3.scaleSequential(d3.interpolateYlOrRd)
                .domain([minValue, maxValue]);

            // Draw States
            svg.selectAll('path')
                .data(geoData.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', (d: any) => {
                    const stateId = d.id;
                    const value = stateId ? data[stateId] : 0;
                    return colorScale(value);
                })
                .attr('stroke', '#fff')
                .attr('stroke-width', 0.5)
                .on('mouseover', (event, d: any) => {
                    const stateId = d.id;
                    const value = stateId ? data[stateId] : 'No data';
                    const tooltip = d3.select('#tooltip');
                    tooltip.style('opacity', 1)
                        .html(`<strong>${d.properties.name}</strong><br/>Value: ${value}`)
                        .style('left', (event.pageX + 10) + 'px')
                        .style('top', (event.pageY - 28) + 'px');
                })
                .on('mouseout', () => {
                    d3.select('#tooltip').style('opacity', 0);
                });
        }).catch((error) => {
            console.error('Error loading TopoJSON:', error);
        });
    }, []);

    return (
        <div className="relative">
            <svg ref={svgRef}></svg>
            <div
                id="tooltip"
                className="absolute pointer-events-none bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0"
            ></div>
        </div>
    );
};

export default HeatMap;
