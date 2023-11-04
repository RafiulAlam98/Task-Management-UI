/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import Loading from "../ui/Loading";

const TaskList = () => {
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await fetch(
        "https://task-management-api-sigma.vercel.app/api/v1/task"
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(tasks.data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {tasks?.data.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
          {tasks.data.map((item) => (
            <div
              key={item._id}
              className=" w-full rounded bg-base-100 shadow-xl ml-5"
            >
              <div className="flex justify-between items-center">
                <div className="ml-4 mr-4 ">
                  <h2 className="text-md font-base ">{item.title}</h2>
                  <h2 className="text-sm  text-[#17C16A] font-semibold">
                    {item.project}
                  </h2>
                </div>
                <h4 className="w-50 bg-[#17C16A] p-5 text-white font-semibold font-xl">
                  {item.duration} Min
                </h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <h2 className="text-3xl font-semibold bg-[#023047] rounded text-white p-4">
            No Task Added Yet
          </h2>
          <h2 className="text-3xl ml-5 font-semibold border p-4 rounded-full text-white bg-[#023047]">
            <i className="fa-solid fa-basket-shopping"></i>
          </h2>
        </div>
      )}
    </>
  );
};

export default TaskList;
