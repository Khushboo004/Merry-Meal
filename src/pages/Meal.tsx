
import AllMeal from "./Partner/AllMeal";
import MealPagination from "./Partner/MealPagination";

type Props = {
  role: String;
};
const Meal = (props: Props) => {
  const { role } = props;

  return (
    <div className="">
      <AllMeal role={role} />

   {/* <MealPagination /> */}
    </div>
  );
};

export default Meal;