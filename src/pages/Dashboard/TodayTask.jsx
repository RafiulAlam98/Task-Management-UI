/* eslint-disable react/no-unknown-property */

import Form from '../../components/Forms/Form';
import FormInput from '../../components/Forms/FormInput';
import FormSelectInput from '../../components/Forms/FormSelectInput';
import { Link } from 'react-router-dom';
import TaskList from '../../components/Tasks/TaskList';
import { priorities } from '../../components/constant/priority';
import toast from 'react-hot-toast';
import { useState } from 'react';

const TodayTask = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});

  const onSubmit = data => {
    console.log(data);
    const newData = {
      title: data.title,
      duration: parseInt(data.duration),
      project: `${data.project ? data.project : ''}`,
      taskDate: data.taskDate,
      description: data.description,
      priority: data.priority,
      status: Boolean(`${false}`),
      employee: 'abc@def.com',
    };
    setLoading(true);
    fetch('https://task-management-api-sigma.vercel.app/api/v1/task', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setLoading(false);
        if (res.success === true) {
          toast.success(res.message);
        }
        setResponseData(res);
      });
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="">
          <button
            onClick={() =>
              document.getElementById('add-task-modal').showModal()
            }
            className="btn btn-sm btn-primary my-4 ml-1"
          >
            <span>
              <i className="fa-solid fa-plus"></i>
            </span>
            <span>Add Task</span>
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
                All Task
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
                  <FormSelectInput
                    placeholder="Select Priority"
                    name="priority"
                    options={priorities}
                  />
                </div>
                <div>
                  <FormSelectInput
                    placeholder="Select Project"
                    name="project"
                  />
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
          </div>
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

export default TodayTask;
