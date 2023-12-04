import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allUsers = [],
    isPending: loading,
    refetch:allUsersRefetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  return [allUsers, loading, allUsersRefetch];
};

export default useUser;
