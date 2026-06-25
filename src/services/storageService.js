export const initializeData = () => {

  const users = JSON.parse(
    localStorage.getItem("users")
  );

  if (!users) {

    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          id: 1,
          name: "Admin",
          email: "admin@college.com",
          password: "admin123",
          role: "admin",
        },
        {
          id: 2,
          name: "Student",
          email: "student@college.com",
          password: "student123",
          role: "student",
        },
      ])
    );
  }

  if (!localStorage.getItem("assignments")) {
    localStorage.setItem(
      "assignments",
      JSON.stringify([])
    );
  }

  if (!localStorage.getItem("submissions")) {
    localStorage.setItem(
      "submissions",
      JSON.stringify([])
    );
  }
};