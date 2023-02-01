import SearchIcon from "@mui/icons-material/Search";
import { Container, FormControl, Grid, InputLabel, NativeSelect } from "@mui/material";
import ViewMore from "./ViewMore";

type Props = {};

const DeliManagement = (props: Props) => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Delivery Info
      </h1>
      <Container>
        <Grid container mt={2} spacing={2}>
      <Grid item xs={12}>
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
      <Grid item xs={12}>

      <div className="py-5 px-5">
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Status
          </InputLabel>
          <NativeSelect
            defaultValue={"all"}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={"all"}>All</option>
            <option value={"Fruits"}>Fruits</option>
            <option value={"Vegetables"}>Vegetables</option>
            <option value={"Healthy Foods"}>Healthy Foods</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Unhealthy Foods"}>Unhealthy Foods</option>
            <option value={"Sweets"}>Sweets</option>
          </NativeSelect>
        </FormControl>
      </div>
      </Grid>
      <Grid item  xs={12}>
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead>
            <tr className="border-b-4 border-green-400">
              <th className="p-5">No.</th>
              <th className="p-5">Delivery Number</th>
              <th className="p-5">Deli Status</th>
              <th className="p-5">Address</th>
              <th className="p-5">Order by</th>
              <th className="p-5">Delivered by</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b">
              <td className="p-5">No.</td>
              <td className="p-5">Meal Name</td>
              <td className="p-5">Meal Category</td>
              <td className="p-5">Meal Status</td>
              <td className="p-5">Meal Img</td>
              <td className="p-5">Meal Description</td>
              <td className="p-2">
                <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                  Edit
                </button>
                <button className="p-2 bg-red-500 rounded-md text-white ">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-5">No.</td>
              <td className="p-5">Meal Name</td>
              <td className="p-5">Meal Category</td>
              <td className="p-5">Meal Status</td>
              <td className="p-5">Meal Img</td>
              <td className="p-5">Meal Description</td>
              <td className="p-2">
                <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                  Edit
                </button>
                <button className="p-2 bg-red-500 rounded-md text-white ">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
     </Grid>
     </Grid>
     </Container>
      <ViewMore />
    </div>
  );
};

export default DeliManagement;
