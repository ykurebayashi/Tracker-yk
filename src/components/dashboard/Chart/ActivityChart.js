import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./ActivityChart.css";

const ActivityChart = ({ chartItems }) => {
  // console.log(chartItems);
  return <Bar data={chartItems} />;
};

export default ActivityChart;
