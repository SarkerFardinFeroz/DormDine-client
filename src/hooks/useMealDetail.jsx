import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMealDetail = ({ id }) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: meal = [],
    isPending: loading,
    refetch:refetchMeal,
  } = useQuery({
    queryKey: ["meal"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/meal-details/${id}`);
      return res.data;
    },
  });

  return [meal, loading, refetchMeal];
};

export default useMealDetail;
