import React from "react";

function AssignmentTable({
  assignments,
  deleteAssignment,
  setEditingId
}) {

  return (

    <table className="assignment-table">

      <thead>

        <tr>
          <th>Title</th>
          <th>Subject</th>
          <th>Due Date</th>
          <th>Created On</th>
          <th>Action</th>
        </tr>

      </thead>

      <tbody>

        {assignments.length === 0 ? (

          <tr>
            <td
              colSpan="5"
              style={{
                textAlign: "center",
                padding: "20px"
              }}
            >
              No Assignments Found
            </td>
          </tr>

        ) : (

          assignments.map((assignment) => (

            <tr key={assignment.id}>

              <td>
                {assignment.title}
              </td>

              <td>
                {assignment.subject}
              </td>

              <td>
                {assignment.dueDate}
              </td>

              <td>
                {assignment.createdAt
                  ? new Date(
                      assignment.createdAt
                    ).toLocaleDateString()
                  : "-"}
              </td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() =>
                    setEditingId(
                      assignment.id
                    )
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteAssignment(
                      assignment.id
                    )
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))

        )}

      </tbody>

    </table>

  );
}

export default AssignmentTable;