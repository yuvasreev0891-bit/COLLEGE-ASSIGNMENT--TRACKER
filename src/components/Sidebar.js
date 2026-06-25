import React from "react";
import {
 FaHome,
 FaTasks,
 FaSignOutAlt
}
from "react-icons/fa";

import {
 logout
}
from "../services/authService";

import {
 useNavigate
}
from "react-router-dom";

function Sidebar() {

 const navigate =
 useNavigate();

 const user =
 JSON.parse(
 localStorage.getItem(
 "currentUser"
 ));

 const handleLogout =
 () => {

 logout();

 navigate("/");
 };

 return (

 <div className="sidebar">

 <h2>AMS</h2>

 <ul>

 <li>
 <FaHome />
 Dashboard
 </li>

 <li>
 <FaTasks />
 Assignments
 </li>

 <li>
 Role:
 {user?.role}
 </li>

 <li
 onClick={
 handleLogout
 }
 className=
 "logout-btn"
 >

 <FaSignOutAlt />
 Logout

 </li>

 </ul>

 </div>

 );
}

export default Sidebar;