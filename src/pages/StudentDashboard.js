import React,
{
  useEffect,
  useState
}
from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import StudentDashboardCards
from "../components/StudentDashboardCards";

import StudentAssignmentTable
from "../components/StudentAssignmentTable";

function StudentDashboard() {

  const [
    assignments,
    setAssignments
  ] = useState([]);

  const [
    submissions,
    setSubmissions
  ] = useState([]);

  const [
    search,
    setSearch
  ] = useState("");

  const [
    subject,
    setSubject
  ] = useState("All");

  useEffect(() => {

    const assignmentData =
      JSON.parse(
        localStorage.getItem(
          "assignments"
        )
      ) || [];

    const submissionData =
      JSON.parse(
        localStorage.getItem(
          "submissions"
        )
      ) || [];

    setAssignments(
      assignmentData
    );

    setSubmissions(
      submissionData
    );

  }, []);

  const submitAssignment =
    assignmentId => {

      const user =
        JSON.parse(
          localStorage.getItem(
            "currentUser"
          )
        );

      const newSubmission = {

        id: Date.now(),

        assignmentId,

        studentId: user.id,

        submittedDate:
          new Date()
            .toISOString()
            .split("T")[0]

      };

      const updated = [
        ...submissions,
        newSubmission
      ];

      setSubmissions(
        updated
      );

      localStorage.setItem(
        "submissions",
        JSON.stringify(
          updated
        )
      );
    };

  const filtered =
    assignments.filter(
      item =>
        item.title
          .toLowerCase()
          .includes(
            search
              .toLowerCase()
          ) &&
        (
          subject === "All"
            ? true
            : item.subject ===
              subject
        )
    );

  const subjects = [
    "All",
    ...new Set(
      assignments.map(
        a => a.subject
      )
    )
  ];

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="content">

        <Navbar />

        <StudentDashboardCards
          assignments={
            assignments
          }
          submissions={
            submissions
          }
        />

        <div
          className="filter-box"
        >

          <input
            placeholder="Search Assignment..."
            value={search}
            onChange={e =>
              setSearch(
                e.target.value
              )
            }
          />

          <select
            value={subject}
            onChange={e =>
              setSubject(
                e.target.value
              )
            }
          >

            {subjects.map(
              item => (

                <option
                  key={item}
                >
                  {item}
                </option>

              )
            )}

          </select>

        </div>

        <StudentAssignmentTable

          assignments={
            filtered
          }

          submissions={
            submissions
          }

          submitAssignment={
            submitAssignment
          }

        />

      </div>

    </div>
  );
}

export default StudentDashboard;