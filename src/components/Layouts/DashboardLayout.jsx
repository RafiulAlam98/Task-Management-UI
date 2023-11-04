import { Link, Outlet } from 'react-router-dom';
import { MdDashboardCustomize, MdReport } from 'react-icons/Md';

/* eslint-disable react/prop-types */
const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-[#3a86ff] text-base-content">
          <h1 className="text-3xl mb-6 text-center text-[#ede0d4] font-semibold">
            TASK MANAGEMENT
          </h1>
          {/* Sidebar content here */}
          <li className="my-1">
            <Link className="text-white text-xl font-semibold" to="/dashboard">
              <span>
                <MdDashboardCustomize />
              </span>{' '}
              <span> Dashboard</span>
            </Link>
          </li>
          <li className="my-1">
            <Link
              className="text-white text-xl font-semibold"
              to="/dashboard/today-task "
            >
              <span>
                <i className="fa-solid fa-star"></i>
              </span>{' '}
              <span>Today</span>
            </Link>
          </li>
          <li className="my-1">
            <Link
              className="text-white text-xl font-semibold"
              to="/dashboard/projects "
            >
              <span>
                <i className="fa-solid fa-circle-check"></i>
              </span>{' '}
              <span>Projects</span>
            </Link>
          </li>
          <li className="my-1">
            <Link
              className="text-white text-xl font-semibold"
              to="/dashboard/task-flow "
            >
              <span>
                <i className="fa-solid fa-list-check"></i>
              </span>
              <span>My Task Flow</span>
            </Link>
          </li>
          <li className="my-1">
            <Link
              className="text-white text-xl font-semibold"
              to="/dashboard/task-report "
            >
              <span>
                <MdReport />
              </span>
              <span>Task Report</span>
            </Link>
          </li>
          <li className="my-1">
            <Link
              className="text-white text-xl font-semibold"
              to="/dashboard/profile "
            >
              <span>
                <i className="fa-solid fa-user "></i>
              </span>{' '}
              <span> Profile</span>
            </Link>
          </li>
          <li className="my-1">
            <button className="text-white text-xl font-semibold">
              <span>
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </span>{' '}
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
