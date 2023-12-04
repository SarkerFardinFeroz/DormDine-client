import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllReview = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allReview = [],
    isLoading,
    refetch: allReviewRefetch,
  } = useQuery({
    queryKey: ["reviewData"],
    queryFn: async () => {
      const response = await axiosPublic.get(`/reviews`);
      return response.data;
    },
  });
  return [allReview, isLoading, allReviewRefetch];
};

export default useAllReview;
