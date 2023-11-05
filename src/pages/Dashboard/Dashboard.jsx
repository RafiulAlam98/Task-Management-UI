import { Link } from 'react-router-dom';
import { MdReport } from 'react-icons/Md';

const Dashboard = () => {
  return (
    <div className="flex justify-start items-center my-4 rounded">
      <div className="card rounded w-2/3 bg-base-100 shadow-xl mx-3 ">
        <Link to="/dashboard/today-task">
          <div className="flex justify-between items-center rounded bg-[#17C16A] py-6 px-4">
            <h3 className="text-3xl text-white font-semibold">Total Task</h3>
            <div>
              <i className="fa-solid fa-star text-4xl  text-white"></i>
            </div>
          </div>

          <h2 className=" text-4xl text-teal-600 font-bold py-4 px-4">4</h2>
        </Link>
      </div>
      <div className="card rounded w-2/3 bg-base-100 shadow-xl mx-3 ">
        <Link to="/dashboard/projects">
          <div className="flex justify-between items-center rounded bg-[#023047] py-6 px-4">
            <h3 className="text-3xl text-white font-semibold">
              Total Projects
            </h3>
            <div>
              <i className="fa-solid fa-circle-check text-4xl  text-white"></i>
            </div>
          </div>

          <h2 className=" text-4xl text-teal-600 font-bold py-4 px-4">4</h2>
        </Link>
      </div>
      <div className="card rounded w-2/3 bg-base-100 shadow-xl mx-3 ">
        <Link to="/dashboard/task-report">
          <div className="flex justify-between items-center rounded bg-[#0077b6] py-6 px-4">
            <h3 className="text-3xl text-white font-semibold">Task Report</h3>
            <h2 className="text-5xl  text-white">
              <MdReport />
            </h2>
          </div>

          <h2 className=" text-4xl text-teal-600 font-bold py-4 px-4">4</h2>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
