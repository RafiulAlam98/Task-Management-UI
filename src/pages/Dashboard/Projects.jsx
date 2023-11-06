import { useState } from "react";
import { getFromLocalStorage } from "../../helpers/utils/saveData";
import useProjects from "../../hooks/useProjects";

import ProjectList from "../../components/Tasks/ProjectList";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Forms/Form";

import FormInput from "../../components/Forms/FormInput";
import { authEmail } from "../../components/constant/authKey";
import toast from "react-hot-toast";
import Loading from "../../components/ui/Loading";

const Projects = () => {
  let loggedInUserProjects;
  const navigate = useNavigate();
  const email = getFromLocalStorage(authEmail);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const [projects, isLoading, refetch] = useProjects();

  if (!isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const newData = {
      title: data.title,
      description: data.description,
      employee: email,
    };
    setLoading(true);
    fetch("https://task-management-api-sigma.vercel.app/api/v1/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(false);
        if (res.success === true) {
          toast.success(res.message);
          navigate("/dashboard/today-task");
          refetch();
        }
        setResponseData(res);
      });
  };

  if (email && projects.data > 0 && !isLoading) {
    loggedInUserProjects = projects.data.find(
      (item) => item.employee === email
    );
  }
  console.log(loggedInUserProjects, email);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="ml-4">
          <button
            onClick={() =>
              document.getElementById("add-task-modal").showModal()
            }
            className="btn btn-sm btn-primary my-4 "
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            <span>Add Projects</span>
          </button>
        </div>
      </div>
      <div className="divider"></div>

      {loggedInUserProjects && (
        <ProjectList
          refetch={refetch}
          loggedInUserProjects={loggedInUserProjects}
          isLoading={isLoading}
        />
      )}

      <dialog id="add-task-modal" className="modal">
        <div className="modal-box w-full rounded">
          <span className="flex justify-end items-center">
            <form method="dialog">
              <button className="btn btn-sm btn-warning rounded">
                <i className="fa-solid fa-xmark text-red-800 "></i>
              </button>
            </form>
          </span>
          <h2 className="text-2xl text-center font-semibold text-gray-500">
            Add Projects
          </h2>
          <div className="flex justify-center items-center my-2">
            <Link to="/dashboard/today-task">
              <button className="btn btn-sm btn-primary ">Add New Task</button>
            </Link>
          </div>

          <Form submitHandler={onSubmit}>
            <div className="my-2 mt-6">
              <FormInput
                name="title"
                placeholder="Enter project title"
                type="text"
              />
            </div>

            <div className="my-2">
              <FormInput
                name="description"
                placeholder="Description"
                type="text"
              />
            </div>

            {loading ? (
              <span className="loading loading-spinner loading-lg"></span>
            ) : (
              <button
                className="btn block btn-sm btn-active btn-primary mt-5"
                type="submit"
              >
                Submit
              </button>
            )}
          </Form>

          {responseData.success === false > 0 && (
            <div className="alert alert-error mt-5 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <spa className="text-sm text-white font-semibold block">
                {responseData.message}
              </spa>
              <span className="text-sm text-white font-semibold block">
                {responseData.errorMessages[0].message}
              </span>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
};

export default Projects;
