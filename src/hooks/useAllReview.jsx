import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "./useAxiosSecure";

const useAllReview = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allReview = [],
    isLoading,
    refetch:allReviewRefetch,
  } = useQuery({
    queryKey: ["reviewData"],
    queryFn: async () => {
      const response = await axiosSecure.get(`/reviews`);
      return response.data;
    },
  });
  return [allReview, isLoading, allReviewRefetch];
};

export default useAllReview;
