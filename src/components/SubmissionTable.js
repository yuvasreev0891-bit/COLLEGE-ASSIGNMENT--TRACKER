import React from "react";

function SubmissionTable({
 submissions,
 assignments
}) {

 return (

 <table
 className="assignment-table"
 >

 <thead>

 <tr>
 <th>Assignment</th>
 <th>Student ID</th>
 <th>Date</th>
 </tr>

 </thead>

 <tbody>

 {submissions.map(
 item => {

 const assignment =
 assignments.find(
 a =>
 a.id ===
 item.assignmentId
 );

 return (

 <tr
 key={item.id}
 >

 <td>
 {
 assignment?.title
 }
 </td>

 <td>
 {
 item.studentId
 }
 </td>

 <td>
 {
 item.submittedDate
 }
 </td>

 </tr>

 );
 })
 }

 </tbody>

 </table>

 );
}

export default SubmissionTable;