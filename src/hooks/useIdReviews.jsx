import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useIdReviews = () => {
    const axiosPublic = useAxiosPublic();
    const {
      data: reviews = [],
      isPending: loading,
      refetch:refetchReview,
    } = useQuery({
      queryKey: ["reviews"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/reviews/${id}`);
        return res.data;
      },
    });
};

export default useIdReviews;