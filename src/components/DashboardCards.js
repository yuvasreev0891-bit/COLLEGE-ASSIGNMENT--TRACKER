import React from "react";

function DashboardCards({ assignments }) {

  const total =
    assignments.length;

  const pending =
    assignments.filter(
      a => a.status === "Pending"
    ).length;

  const submitted =
    assignments.filter(
      a => a.status === "Submitted"
    ).length;

  const late =
    assignments.filter(
      a => a.status === "Late"
    ).length;

  return (

    <div className="cards-grid">

      <div className="stat-card">
        <h1>{total}</h1>
        <p>Total</p>
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

export default DashboardCards;