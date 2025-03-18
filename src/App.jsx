import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/super-admin",
      element: (
        <ProtectedRoute allowedRoles={["super-admin"]}>
          <SuperAdminDashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/employee",
      element: (
        <ProtectedRoute allowedRoles={["employee"]}>
          <EmployeeDashboard />
        </ProtectedRoute>
      ),
    },
  ]);


  return (
   <>
   <div className='className="min-h-screen bg-gray-100"'>
    <RouterProvider router =  {router} />
   </div>
   </>
  )
}

export default App