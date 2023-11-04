/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import Form from "../../components/Forms/Form";
import FormInput from "../../components/Forms/FormInput";
import FormSelectInput from "../../components/Forms/FormSelectInput";
import TaskList from "../../components/Tasks/TaskList";

const TodayTask = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="">
          <button
            onClick={() =>
              document.getElementById("add-task-modal").showModal()
            }
            className="btn btn-sm btn-primary my-4 ml-1"
          >
            Add Task
          </button>
        </div>
        <div className=" col-span-2">
          <input
            type="text"
            placeholder="Search Task here"
            className="input input-sm my-4 input-bordered input-info w-full max-w-xs rounded "
          />
        </div>
        <div className="my-4">
          <div className="mr-4">
            <select className="select select-sm rounded  select-info w-full max-w-xs">
              <option disabled selected>
                Select Priority
              </option>
              <option>none</option>
              <option>1st Priority</option>
              <option>2nd Priority</option>
              <option>3rd Priority</option>
            </select>
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <TaskList />

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
            Add Task
          </h2>
          <div className="flex justify-center items-center my-2">
            <Link to="/dashboard/projects">
              <button className="btn btn-sm btn-primary ">
                Add New Project
              </button>
            </Link>
          </div>

          <div className="modal-action">
            <Form submitHandler={onSubmit}>
              <div className="grid grid-cols-2 gap-4 justify-between">
                <div>
                  <FormSelectInput placeholder="Select Priority" name="" />
                </div>
                <div>
                  <FormSelectInput placeholder="Select Project" name="" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 my-3">
                <FormInput
                  name="title"
                  placeholder="Enter task title"
                  type="text"
                />
                <FormInput
                  name="duration"
                  placeholder="Duration in minute"
                  type="text"
                />
                <FormInput name="taskDate" placeholder="" type="date" />
              </div>
              <FormInput
                name="description"
                placeholder="Description"
                type="text"
              />
              <button
                className="btn block btn-sm btn-active btn-primary mt-5"
                htmlType="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TodayTask;
