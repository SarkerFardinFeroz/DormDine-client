import { useParams } from "react-router-dom";
import MealDetail from "./MealDetail";
import useMealDetail from "../../hooks/useMealDetail";

const MealDetails = () => {
  const params = useParams();
 const [meal, ,refetch] = useMealDetail(params);

  return (
    <div>
      <MealDetail meal={meal} refetch={refetch} />
    </div>
  );
};

export default MealDetails;
