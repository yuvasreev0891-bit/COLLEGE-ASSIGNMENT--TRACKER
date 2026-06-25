import React from "react";

function AdminSubmissionTable({
  submissions,
  assignments
}) {

  const downloadFile =
    submission => {

      const link =
        document.createElement("a");

      link.href =
        submission.fileData;

      link.download =
        submission.fileName;

      link.click();
    };

  return (

    <div>

      <h2
      style={{
      margin:"20px"
      }}
      >
      Student Submissions
      </h2>

      <table
      className="assignment-table"
      >

        <thead>

          <tr>
            <th>Student</th>
            <th>Assignment</th>
            <th>File</th>
            <th>Date</th>
            <th>Download</th>
          </tr>

        </thead>

        <tbody>

          {submissions.map(
            submission => {

              const assignment =
                assignments.find(
                  a =>
                    a.id ===
                    submission.assignmentId
                );

              return (

                <tr
                  key={
                    submission.id
                  }
                >

                  <td>
                    {
                      submission.studentName
                    }
                  </td>

                  <td>
                    {
                      assignment?.title
                    }
                  </td>

                  <td>
                    {
                      submission.fileName
                    }
                  </td>

                  <td>
                    {
                      submission.submittedDate
                    }
                  </td>

                  <td>

                    <button
                      className="submit-btn"
                      onClick={() =>
                        downloadFile(
                          submission
                        )
                      }
                    >
                      Download
                    </button>

                  </td>

                </tr>

              );

            }
          )}

        </tbody>

      </table>

    </div>

  );
}

export default AdminSubmissionTable;