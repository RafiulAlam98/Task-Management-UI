import { useQuery } from "react-query";

const useTasks = () => {
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

  return [tasks, isLoading, refetch];
};

export default useTasks;
