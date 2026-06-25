import React,
{
  useEffect,
  useState
}
from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import AssignmentForm from "../components/AssignmentForm";
import AssignmentTable from "../components/AssignmentTable";
import AdminSubmissionTable from "../components/AdminSubmissionTable";

function AdminDashboard() {

  const [
    assignments,
    setAssignments
  ] = useState([]);

  const [
    editingId,
    setEditingId
  ] = useState(null);

  const [
    submissions,
    setSubmissions
  ] = useState([]);

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

  const saveAssignments =
    data => {

      setAssignments(data);

      localStorage.setItem(
        "assignments",
        JSON.stringify(data)
      );
    };

  const addAssignment =
    assignment => {

      saveAssignments([
        ...assignments,
        {
          ...assignment,
          createdAt:
            new Date()
              .toISOString()
        }
      ]);
    };

  const deleteAssignment =
    id => {

      saveAssignments(
        assignments.filter(
          item =>
            item.id !== id
        )
      );
    };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="content">

        <Navbar />

        <DashboardCards
          assignments={
            assignments
          }
          submissions={
            submissions
          }
        />

        <AssignmentForm
          addAssignment={
            addAssignment
          }
        />

        <AssignmentTable
          assignments={
            assignments
          }
          deleteAssignment={
            deleteAssignment
          }
          setEditingId={
            setEditingId
          }
        />

        <AdminSubmissionTable
          submissions={
            submissions
          }
          assignments={
            assignments
          }
        />

      </div>

    </div>

  );
}

export default AdminDashboard;