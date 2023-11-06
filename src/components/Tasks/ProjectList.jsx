/* eslint-disable react/prop-types */

const ProjectList = ({ loggedInUserProjects }) => {
  console.log(loggedInUserProjects);

  return (
    <>
      {loggedInUserProjects.length > 0 ? (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mr-10">
          {loggedInUserProjects.map((item) => (
            <div
              key={item._id}
              className=" w-full rounded bg-base-100 shadow-xl mx-5"
            >
              <div className="flex justify-between items-center">
                <div className="ml-4 mr-4 ">
                  <h2 className="text-md font-base ">{item.title}</h2>
                  <h2 className="text-sm  text-[#17C16A] font-semibold">
                    {item.title}
                  </h2>
                </div>
                <div className="flex justify-center items-center">
                  <div className=" bg-[#0077B6] px-5 py-8">
                    <span className=" text-white font-semibold font-xl">
                      {item.description} Min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex justify-center items-center  flex-col">
            <h2 className="text-3xl ml-5 font-semibold border p-4 rounded-full text-white bg-[#023047]">
              <i className="fa-solid fa-basket-shopping"></i>
            </h2>
            <div>
              <h2 className="text-3xl font-semibold rounded text-center mt-4">
                No Task Added Yet!
              </h2>
              <h2 className="text-center">
                Please add your task for proper maintain your work schedule.
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
