/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Forms/Form";
import FormSelectInput from "../../components/Forms/FormSelectInput";
import { priorities, status } from "../../components/constant/priority";
import FormInput from "../../components/Forms/FormInput";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../../components/ui/Loading";

const EditTask = () => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await fetch(
        `https://task-management-api-sigma.vercel.app/api/v1/task/${id}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const newData = {
      title: `${data.title ? data.title : tasks.data.title}`,
      duration: `${data.duration ? data.duration : tasks.data.title}`,
      project: `${data.project ? data.project : tasks.data.project}`,
      taskDate: `${data.taskDate ? data.taskDate : tasks.data.taskDate}`,
      description: `${
        data.description ? data.description : tasks.data.description
      }`,
      priority: `${data.priority ? data.priority : tasks.data.priority}`,
      status: `${data.status ? data.status : tasks.data.status}`,
      employee: "abc@def.com",
    };
    console.log(data, newData);
    setLoading(true);
    fetch(`https://task-management-api-sigma.vercel.app/api/v1/task/${id}`, {
      method: "PATCH",
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
          refetch();
          navigate("/dashboard");
        }
        setResponseData(res);
      });
  };
  return (
    <div className="m-8">
      <h2 className="text-2xl mb-4 fonts">Edit Task </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <Form submitHandler={onSubmit}>
          <div className="grid grid-cols-2 gap-4 justify-between">
            <div>
              <FormSelectInput
                placeholder="Select Priority"
                name="priority"
                defaultValue={tasks.data.priority}
                options={priorities}
              />
            </div>
            <div>
              <FormSelectInput
                defaultValue={tasks.data.project}
                placeholder="Select Project"
                name="project"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 justify-between my-2">
            <div>
              <FormSelectInput
                placeholder="Select Status"
                name="status"
                defaultValue={tasks.data.status}
                options={status}
              />
            </div>
            <div>
              <FormInput
                defaultValue={tasks.data.taskDate}
                name="taskDate"
                placeholder=""
                type="date"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 my-2">
            <FormInput
              name="title"
              defaultValue={tasks.data.title}
              placeholder="Enter task title"
              type="text"
            />
            <FormInput
              name="duration"
              defaultValue={tasks.data.duration}
              placeholder="Duration in minute"
              type="text"
            />
          </div>
          <FormInput
            defaultValue={tasks.data.description}
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
              Update
            </button>
          )}
        </Form>
      )}
    </div>
  );
};

export default EditTask;
