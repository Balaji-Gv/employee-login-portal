import React from "react";

const EmployeeDashboard = () => {
  const tasks = [
    { id: 1, task: "Submit Timesheet", dueDate: "2025-03-15" },
    { id: 2, task: "Attend Meeting", dueDate: "2025-03-20" },
    { id: 3, task: "Complete Training", dueDate: "2025-03-30" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Task ID</th>
            <th className="border border-gray-300 p-2">Task</th>
            <th className="border border-gray-300 p-2">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td className="border border-gray-300 p-2">{task.id}</td>
              <td className="border border-gray-300 p-2">{task.task}</td>
              <td className="border border-gray-300 p-2">{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDashboard;