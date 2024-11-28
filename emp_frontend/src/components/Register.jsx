import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterLogin = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  // Handle user registration
  const register = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!email || !username || !password) {
      setRegisterStatus("Please fill in all fields.");
      return;
    }

    // Save user credentials to localStorage
    const user = { email, username, password };

    // Store in localStorage (ensure it's stored as a JSON object)
    localStorage.setItem("user", JSON.stringify(user));

    // Clear form fields after successful registration
    setEmail("");
    setUsername("");
    setPassword("");

    // Update registration status
    setRegisterStatus("Account created successfully!");
  };

  // Handle user login
  const login = (e) => {
    e.preventDefault();

    // Check if both fields are entered
    if (!loginUsername || !loginPassword) {
      setLoginStatus("Please enter both username and password.");
      return;
    }

    // Retrieve stored user credentials from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and credentials match
    if (
      storedUser &&
      storedUser.username === loginUsername &&
      storedUser.password === loginPassword
    ) {
      // Redirect to home page on successful login
      setLoginStatus("Login successful!");
      navigate("/home");
    } else {
      setLoginStatus("Wrong username or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        {/* Registration Form */}
        <div className="col-12 col-md-5 col-lg-4 p-3 rounded border loginForm shadow">
          <h4 className="text-center mb-3 p-2 d-flex justify-content-center shadow text-primary fontsize1">
            Register Here
          </h4>
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter your Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="username">Username*</label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                placeholder="Enter your Username"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password*</label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Enter your Password"
              />
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-success w-100">
                Create an Account
              </button>
            </div>
            <h5 className="text-center text-success mt-2" style={{ fontSize: "14px" }}>
              {registerStatus}
            </h5>
          </form>
        </div>

        {/* Login Form */}
        <div className="col-12 col-md-5 col-lg-4 mb-4 mb-md-0 p-3 rounded border loginForm mx-2 shadow">
          <h4 className="text-center mb-3 p-2 d-flex justify-content-center shadow text-primary fontsize1">
            Login Here
          </h4>
          <form onSubmit={login}>
            <div className="form-group">
              <label htmlFor="loginUsername">Username*</label>
              <input
                className="form-control"
                type="text"
                name="loginUsername"
                onChange={(e) => setLoginUsername(e.target.value)}
                value={loginUsername}
                placeholder="Enter your Username"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="loginPassword">Password*</label>
              <input
                className="form-control"
                type="password"
                name="loginPassword"
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
                placeholder="Enter your Password"
              />
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
            <h5 className="text-center text-danger mt-2" style={{ fontSize: "14px" }}>
              {loginStatus}
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
