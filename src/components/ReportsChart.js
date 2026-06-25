import React from "react";

import {
 Chart as ChartJS,
 ArcElement,
 Tooltip,
 Legend
} from "chart.js";

import {
 Doughnut
} from "react-chartjs-2";

ChartJS.register(
 ArcElement,
 Tooltip,
 Legend
);

function ReportsChart({
 assignments,
 submissions
}) {

 const total =
 assignments.length;

 const submitted =
 submissions.length;

 const pending =
 total - submitted;

 const data = {

 labels: [
 "Submitted",
 "Pending"
 ],

 datasets: [
 {
 data: [
 submitted,
 pending
 ]
 }
 ]
 };

 return (

 <div
 className="chart-card"
 >

 <h2>
 Submission Analytics
 </h2>

 <Doughnut
 data={data}
 />

 </div>

 );
}

export default ReportsChart;