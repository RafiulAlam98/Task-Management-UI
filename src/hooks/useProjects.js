import { useQuery } from "react-query";

const useProjects = () => {
  const {
    data: projects = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allProjects"],
    queryFn: async () => {
      const res = await fetch(
        "https://task-management-api-sigma.vercel.app/api/v1/projects"
      );
      const data = await res.json();
      return data;
    },
  });


  return [projects, refetch, isLoading];
};

export default useProjects;
