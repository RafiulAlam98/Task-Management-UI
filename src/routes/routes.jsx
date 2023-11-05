import Dashboard from '../pages/Dashboard/Dashboard';
import DashboardLayout from '../components/Layouts/DashboardLayout';
import Login from '../pages/Login';
import MainLayout from '../components/Layouts/MainLayout';
import Profile from '../pages/Dashboard/Profile';
import Projects from '../pages/Dashboard/Projects';
import TaskFlow from '../pages/Dashboard/TaskFlow';
import TaskReport from '../pages/Dashboard/TaskReport';
import TodayTask from '../pages/Dashboard/TodayTask';
import { createBrowserRouter } from 'react-router-dom';
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/today-task",
        element: <TodayTask />,
      },
      {
        path: "/dashboard/projects",
        element: <Projects />,
      },
      {
        path: "/dashboard/task-flow",
        element: <TaskFlow />,
      },
      {
        path: "/dashboard/task-report",
        element: <TaskReport />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);
export default routes;
