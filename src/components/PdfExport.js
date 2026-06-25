import jsPDF
from "jspdf";

import "jspdf-autotable";

export const exportReport =
 (
 assignments,
 submissions
 ) => {

 const doc =
 new jsPDF();

 doc.text(
 "Assignment Report",
 20,
 20
 );

 const rows =
 submissions.map(
 item => [

 item.assignmentId,

 item.studentId,

 item.submittedDate

 ]
 );

 doc.autoTable({

 head: [[
 "Assignment",
 "Student",
 "Date"
 ]],

 body: rows

 });

 doc.save(
 "AssignmentReport.pdf"
 );
};