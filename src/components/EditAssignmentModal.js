import React,
{
 useState
}
from "react";

function EditAssignmentModal({

 assignment,
 updateAssignment,
 closeModal

}) {

 const [
 title,
 setTitle
 ] =
 useState(
 assignment.title
 );

 const [
 subject,
 setSubject
 ] =
 useState(
 assignment.subject
 );

 const [
 dueDate,
 setDueDate
 ] =
 useState(
 assignment.dueDate
 );

 const save =
 () => {

 updateAssignment({

 ...assignment,

 title,
 subject,
 dueDate

 });

 };

 return (

 <div
 className="modal"
 >

 <div
 className="modal-box"
 >

 <h2>
 Edit Assignment
 </h2>

 <input
 value={title}
 onChange={e =>
 setTitle(
 e.target.value
 )}
 />

 <input
 value={subject}
 onChange={e =>
 setSubject(
 e.target.value
 )}
 />

 <input
 type="date"
 value={dueDate}
 onChange={e =>
 setDueDate(
 e.target.value
 )}
 />

 <button
 onClick={save}
 >
 Save
 </button>

 <button
 onClick={
 closeModal
 }
 >
 Cancel
 </button>

 </div>

 </div>

 );
}

export default
EditAssignmentModal;