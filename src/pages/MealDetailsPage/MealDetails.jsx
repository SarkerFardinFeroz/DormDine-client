import { useParams } from "react-router-dom";
import MealDetail from "./MealDetail";
import useMealDetail from "../../hooks/useMealDetail";
import useReviews from "../../hooks/useReviews";
import { Helmet } from "react-helmet-async";

const MealDetails = () => {
  const params = useParams();
  const [meal, , refetchMeal] = useMealDetail(params);
const id = params.id
  const [reviews, loading, refetchReview] = useReviews(id);
refetchReview()
  return (
    <div>
       <Helmet>
  <title>DormDine | Meal Detail | {id}</title>
</Helmet>
      <MealDetail
        meal={meal}
        refetchMeal={refetchMeal}
        loading={loading}
        refetchReview={refetchReview}
        reviews={reviews}
      />
    </div>
  );
};

export default MealDetails;
