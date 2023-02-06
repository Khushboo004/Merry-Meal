import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import filteringMeal from "../../Utils/filteringMeal";
import ViewMore from "../ViewMore";
import { deleteMeals, getAllMeals } from "../../services/MealService";
import { toast } from "react-toastify";

type Props = {};

const MealManagement = (props: Props) => {
  const [allMeals, setAllMeals] = useState<any>();

  const [mealRows, setMealRows] = useState(allMeals);
  useEffect(() => {
    getAllMeals()
      .then((res) => {
        setAllMeals(res.data);
        setMealRows(res.data);
      })
      .catch((error) => {});
  }, []);
  const filterMeal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setMealRows, allMeals);
  };

  const deleteMeal = (e: any) => {
    const token = localStorage.getItem("token");
    const index = e.target.dataset.index;
    const newMeals = mealRows.slice(0, index).concat(mealRows.slice(index + 1));
    deleteMeals(e.target.value, token)
      .then((res: any) => {
        setMealRows(newMeals);
        toast.success("Meal has been deleted!");
      })
      .catch((error: any) => {
        toast.error("Delete Meal Fail, Please retry later!");
        console.error(error);
      });
  };
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Meal Info
      </h1>
      <Container maxWidth={"xl"}>
        <Grid container mt={2} spacing={2}>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={8} sm={10}>
            <div className="search">
              <div className="border border-green-400 rounded-lg flex p-3 w-64 shadow-sm shadow-green-300">
                <SearchIcon />
                <input
                  type="search"
                  className="ml-2 w-full h-full focus:outline-none"
                  placeholder="Search Here"
                />
              </div>
            </div>
          </Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={8} sm={10}>
            <div className="py-5 px-5">
              <FormControl>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Meal Category
                </InputLabel>
                <NativeSelect
                  defaultValue={"all"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => filterMeal(e)}
                >
                  <option value={"all"}>All</option>
                  <option value={"Fruit"}>Fruit</option>
                  <option value={"Vegetable"}>Vegetables</option>
                  <option value={"Drinks"}>Drinks</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={8} sm={10}>
            <div className="p-4">
              <table className="table-auto border rounded-md">
                <thead>
                  <tr className="border-b-4 border-green-400">
                    <th className="p-5">No.</th>
                    <th className="p-5">Meal Name</th>
                    <th className="p-5">Meal Category</th>
                    <th className="p-5">Meal Status</th>
                    <th className="p-5">Meal Img</th>
                    <th className="p-5">Meal Description</th>
                    <th className="p-5">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {mealRows != undefined
                    ? mealRows.map((meal: any, index: any) => (
                        <tr>
                          <td className="p-5">{index + 1}</td>
                          <td className="p-5">{meal.meal_name}</td>
                          <td className="p-5">{meal.category}</td>
                          <td className="p-5">{meal.status}</td>
                          <td className="p-5">
                            <img
                              src={
                                "http://localhost:8080/meals/image" + meal.image
                              }
                              alt=""
                            />
                          </td>
                          <td className="p-5">{meal.meal_desc}</td>
                          <td className="p-2" id={meal.mealId}>
                            <Button className="p-2 bg-green-500 rounded-md text-white mr-3">
                              Edit
                            </Button>
                            <Button
                              className="p-2 bg-red-500 rounded-md text-white"
                              value={meal.mealId}
                              data-index={index}
                              onClick={(e) => deleteMeal(e)}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </table>
            </div>
          </Grid>
          <Grid item lg={2} xs={0.1}></Grid>
        </Grid>
      </Container>
      <ViewMore />
    </div>
  );
};

export default MealManagement;
