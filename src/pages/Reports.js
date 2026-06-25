import React from "react";

import ReportsChart
from "../components/ReportsChart";

import SubmissionTable
from "../components/SubmissionTable";
import {
 exportReport
}
from "../components/PdfExport";
function Reports() {

 const assignments =
 JSON.parse(
 localStorage.getItem(
 "assignments"
 )) || [];

 const submissions =
 JSON.parse(
 localStorage.getItem(
 "submissions"
 )) || [];

 return (

 <div
 className="page"
 >

 <h1>
 Reports Dashboard
 </h1>
<button
className="pdf-btn"
onClick={() =>
exportReport(
assignments,
submissions
)
}
>

Download PDF Report

</button>
 <ReportsChart
 assignments={
 assignments
 }
 submissions={
 submissions
 }
 />

 <SubmissionTable
 assignments={
 assignments
 }
 submissions={
 submissions
 }
 />

 </div>

 );
}

export default Reports;