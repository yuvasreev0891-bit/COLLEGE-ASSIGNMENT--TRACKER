import React from "react";

function StudentDashboardCards({
  assignments,
  submissions
}) {

  const currentUser =
    JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

  const studentSubmissions =
    submissions.filter(
      item =>
        item.studentId ===
        currentUser?.id
    );

  const total =
    assignments.length;

  const submitted =
    studentSubmissions.length;

  const late =
    assignments.filter(
      assignment => {

        const done =
          studentSubmissions.find(
            item =>
              item.assignmentId ===
              assignment.id
          );

        return (
          !done &&
          new Date() >
            new Date(
              assignment.dueDate
            )
        );
      }
    ).length;

  const pending =
    total -
    submitted -
    late;

  return (

    <div className="cards-grid">

      <div className="stat-card">
        <h1>{total}</h1>
        <p>Total Assignments</p>
      </div>

      <div className="stat-card">
        <h1>{submitted}</h1>
        <p>Submitted</p>
      </div>

      <div className="stat-card">
        <h1>{pending}</h1>
        <p>Pending</p>
      </div>

      <div className="stat-card">
        <h1>{late}</h1>
        <p>Late</p>
      </div>

    </div>

  );
}

export default StudentDashboardCards;