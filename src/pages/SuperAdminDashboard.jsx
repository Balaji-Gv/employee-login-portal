import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/users/userSlice";

const SuperAdminDashboard = () => {
  const reports = [
    { id: 1, title: "Monthly Revenue", status: "Completed" },
    { id: 2, title: "User Engagement", status: "Pending" },
    { id: 3, title: "System Audit", status: "In Progress" },
  ];

  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Report ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="border border-gray-300 p-2">{report.id}</td>
              <td className="border border-gray-300 p-2">{report.title}</td>
              <td className="border border-gray-300 p-2">{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-2xl cursor-pointer" onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default SuperAdminDashboard;