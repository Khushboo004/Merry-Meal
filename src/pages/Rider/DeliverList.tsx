import { Container, FormControl, Grid, InputLabel, NativeSelect } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TakeOrderButton from "./TakeOrderButton";
import { Link } from "react-router-dom";
import ViewMore from "../ViewMore";
type Props = {};

const DeliverList = (props: Props) => {
  return (
    <div>
       <Container maxWidth={'xl'} >
        <Grid container mt={2} spacing={2}>
        <Grid item lg={2} sm={0.1} xs={.1}></Grid>
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
        <Grid item lg={2} xs={.1}></Grid>
        <Grid item lg={2} xs={.1}></Grid>
        <Grid item lg={8} sm={10}>
      <div className="py-1 px-5">
        <FormControl>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Status
          </InputLabel>
          <NativeSelect
            defaultValue={"all"}
            inputProps={{
              name: "status",
              id: "uncontrolled-native",
            }}
          >
            <option value={"all"}>All</option>
            <option value={"Ordered"}>Ordered</option>
            <option value={"Pending"}>Pending</option>
            <option value={"Delivered"}>Delivered</option>
          </NativeSelect>
        </FormControl>
      </div>
      </Grid>
         <Grid item lg={2} xs={.1}></Grid>
          <Grid item lg={2} xs={.1}></Grid>
      <Grid item lg={8} xs={11}>
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead className="sticky top-16 bg-white p-2 border-b-4 border-green-400">
            <tr>
              <th className="p-5">No.</th>
              <th className="p-5">Delivery Number</th>
              <th className="p-5">Deli Status</th>
              <th className="p-5">Address</th>
              <th className="p-5">Order by</th>
              <th className="p-5">Delivered by</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm h-3">
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">04445551212</td>
              <td className="p-2">Ordered</td>
              <td className="p-2">Mandalay, Myanmar</td>
              <td className="p-2">Aung Thiha Tun</td>
              <td className="p-2"> --- </td>
              <td className="p-2">
                <Link to={"/rider/deliveries/detail?userRole=RIDER"}>
                  <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                    View Detail
                  </button>
                </Link>
                <TakeOrderButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </Grid>
      <Grid item lg={2} xs={.1}></Grid>
     </Grid>
     </Container>
      <ViewMore />
    </div>
  );
};

export default DeliverList;
