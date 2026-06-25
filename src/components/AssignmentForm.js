import React, {
  useState
} from "react";

function AssignmentForm({
  addAssignment
}) {

  const [title, setTitle] =
    useState("");

  const [subject, setSubject] =
    useState("");

  const [dueDate, setDueDate] =
    useState("");

  const handleSubmit = e => {

    e.preventDefault();

    if (
      !title ||
      !subject ||
      !dueDate
    ) {
      alert(
        "Fill all fields"
      );
      return;
    }

    addAssignment({
      id: Date.now(),
      title,
      subject,
      dueDate,
      status: "Pending"
    });

    setTitle("");
    setSubject("");
    setDueDate("");
  };

  return (

    <form
      className="assignment-form"
      onSubmit={handleSubmit}
    >

      <h2>
        Add Assignment
      </h2>

      <input
        placeholder="Title"
        value={title}
        onChange={e =>
          setTitle(
            e.target.value
          )
        }
      />

      <input
        placeholder="Subject"
        value={subject}
        onChange={e =>
          setSubject(
            e.target.value
          )
        }
      />

      <input
        type="date"
        value={dueDate}
        onChange={e =>
          setDueDate(
            e.target.value
          )
        }
      />

      <button>
        Add Assignment
      </button>

    </form>
  );
}

export default AssignmentForm;