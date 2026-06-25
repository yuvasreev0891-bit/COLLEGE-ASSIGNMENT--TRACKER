import React, { useState } from "react";

function StudentAssignmentTable({
  assignments,
  submissions,
  submitAssignment
}) {

  const [files, setFiles] =
    useState({});

  const handleFileChange = (
    assignmentId,
    file
  ) => {

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {

      setFiles(prev => ({
        ...prev,
        [assignmentId]: {
          fileName: file.name,
          fileData: reader.result
        }
      }));

    };

    reader.readAsDataURL(file);
  };

  const getStatus = id => {

    const submission =
      submissions.find(
        item =>
          item.assignmentId === id
      );

    if (submission)
      return "Submitted";

    return "Pending";
  };

  return (

    <table className="assignment-table">

      <thead>

        <tr>
          <th>Title</th>
          <th>Subject</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Upload File</th>
          <th>Action</th>
        </tr>

      </thead>

      <tbody>

        {assignments.map(
          assignment => (

            <tr
              key={
                assignment.id
              }
            >

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
                {getStatus(
                  assignment.id
                )}
              </td>

              <td>

                {getStatus(
                  assignment.id
                ) ===
                "Submitted" ? (
                  "✓ Uploaded"
                ) : (

                  <input
                    type="file"
                    onChange={e =>
                      handleFileChange(
                        assignment.id,
                        e.target.files[0]
                      )
                    }
                  />

                )}

              </td>

              <td>

                {getStatus(
                  assignment.id
                ) ===
                "Submitted" ? (
                  "✓ Done"
                ) : (

                  <button
                    className="submit-btn"
                    disabled={
                      !files[
                        assignment.id
                      ]
                    }
                    onClick={() =>
                      submitAssignment(
                        assignment.id,
                        files[
                          assignment.id
                        ]
                      )
                    }
                  >
                    Submit
                  </button>

                )}

              </td>

            </tr>

          )
        )}

      </tbody>

    </table>

  );
}

export default StudentAssignmentTable;