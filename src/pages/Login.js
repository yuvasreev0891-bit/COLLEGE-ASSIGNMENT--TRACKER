import React, { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    const user = login(
      email,
      password
    );

    if (!user) {
      alert("Invalid Credentials");
      return;
    }

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/student");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Assignment Tracker</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <div className="demo">

          <h4>Demo Accounts</h4>

          <p>
            Admin:
            admin@college.com
          </p>

          <p>Password: admin123</p>

          <br />

          <p>
            Student:
            student@college.com
          </p>

          <p>Password: student123</p>

        </div>

      </div>
    </div>
  );
}

export default Login;