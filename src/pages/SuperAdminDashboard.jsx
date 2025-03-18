import React from "react";

const SuperAdminDashboard = () => {
  const reports = [
    { id: 1, title: "Monthly Revenue", status: "Completed" },
    { id: 2, title: "User Engagement", status: "Pending" },
    { id: 3, title: "System Audit", status: "In Progress" },
  ];

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
    </div>
  );
};

export default SuperAdminDashboard;