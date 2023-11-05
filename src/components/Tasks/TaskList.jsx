/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Loading from '../ui/Loading';
import { useQuery } from 'react-query';

const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks?.data.length > 0 ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
          {tasks.data.map(item => (
            <div
              key={item._id}
              className=" w-full rounded bg-base-100 shadow-xl mx-5"
            >
              <div className="flex justify-between items-center">
                <div className="ml-4 mr-4 ">
                  {item.priority && (
                    <di
                      title={item.description}
                      className="badge badge-sm badge-secondary badge-outline hover:cursor-pointer"
                    >
                      {item.priority}
                    </di>
                  )}
                  <h2 className="text-md font-base ">{item.title}</h2>
                  <h2 className="text-sm  text-[#17C16A] font-semibold">
                    {item.project}
                  </h2>
                </div>
                <div className="flex justify-center items-center">
                  <div className=" bg-[#0077B6] px-5 py-8">
                    <span className=" text-white font-semibold font-xl">
                      {item.duration} Min
                    </span>
                  </div>
                  <div className="bg-[#17C16A] px-5 py-7">
                    <span title="update task">
                      <i className="fa-regular fa-eye mx-2 text-2xl text-white font-bold hover:text-[#023047]"></i>
                    </span>
                    <span title="delete task">
                      <i className="fa-solid fa-trash mx-2 text-2xl text-white font-bold hover:text-red-500"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="text-3xl ml-5 font-semibold border p-4 rounded-full text-white bg-[#023047]">
            <i className="fa-solid fa-basket-shopping"></i>
          </h2>
          <h2 className="text-3xl font-semibold rounded text-white p-4">
            No Task Added Yet!
          </h2>
          <h2>Please add your task for proper maintain your work schedule.</h2>
        </div>
      )}
    </>
  );
};

export default TaskList;
