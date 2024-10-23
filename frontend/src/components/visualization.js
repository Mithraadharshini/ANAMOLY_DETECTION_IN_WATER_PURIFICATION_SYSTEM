// src/components/Visualization.js
import React from 'react';
import './visualization.css';

function Visualization() {
    // Paths to your chart images
    const histogramImagePath = '/chart1.png';
    const pieChartImagePath = '/chart2.png';
    const pairplotimagepath = '/chart3.png'

    return (
        <div className="visualization-container">
            <h2>Visualization Analysis</h2>
            <div className="scrollable-content">

            <div className="chart-container">
                <h3>Histogram and Pie Chart Visualizations</h3>
                <img
                    src={histogramImagePath}
                    alt="Histogram Visualizations"
                />
            </div>
            <div className="chart-container">
                <h3>Heat Map</h3>
                <img
                    src={pieChartImagePath}
                    alt="Pie Chart Visualization"
                />
            </div>
            <div className="chart-container">
                <h3>Pair Plot</h3>
                <img
                    src={pairplotimagepath}
                    alt="Pair Plot"
                />
            </div>
        </div>
        </div>
    );
}

export default Visualization;
