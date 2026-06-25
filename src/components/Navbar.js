import React from "react";

function Navbar() {

  const user = JSON.parse(
    localStorage.getItem("currentUser")
  );

  return (
    <div className="navbar">

      <h2>
        Welcome, {user?.name}
      </h2>

    </div>
  );
}

export default Navbar;