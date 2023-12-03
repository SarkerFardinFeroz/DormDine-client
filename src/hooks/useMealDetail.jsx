
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMealDetail = ({ id }) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: meal = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal-details/${id}`);
      return res.data;
    },
  });

  return [meal, loading, refetch];
};

export default useMealDetail;
