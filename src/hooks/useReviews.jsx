import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews,
    isLoading: loading,
    refetch: refetchReview,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews/${id}`);
      return res.data;
    },
  });

  return [reviews, loading, refetchReview];
};

export default useReviews;
