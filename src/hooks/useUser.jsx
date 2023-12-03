import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = [],
    isPending: loading,
    refetch:allUsersRefetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return [allUsers, loading, allUsersRefetch];
};

export default useUser;
