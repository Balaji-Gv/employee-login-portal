import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/users/userSlice";

const AdminDashboard = () => {
  const employees = [
    { id: 1, name: "Balaji", department: "HR" },
    { id: 2, name: "James", department: "IT" },
    { id: 3, name: "Arun", department: "Finance" },
  ];

  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border border-gray-300 p-2">{employee.id}</td>
              <td className="border border-gray-300 p-2">{employee.name}</td>
              <td className="border border-gray-300 p-2">{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 cursor-pointer rounded-2xl" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default AdminDashboard;