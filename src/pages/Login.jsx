import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/users/userSlice";

const Login = () => {
  const users = [
    { username: "admin", password: "admin@123", role: "admin" },
    { username: "superadmin", password: "superadmin@123", role: "super-admin" },
    { username: "employee", password: "employee@123", role: "employee" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      dispatch(login(user));
      navigate(`/${user.role}`);
    } else {
      setError("Invalid credentials");
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (error) setError(""); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleInputChange(setUsername)}
            className="border p-2 w-full mb-4 rounded-full"
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword)}
            className="border p-2 w-full mb-4 rounded-full"
            autoComplete="current-password"
          />
          {error && <p className="text-red-500 absolute mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 mt-10 rounded-full w-full cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
