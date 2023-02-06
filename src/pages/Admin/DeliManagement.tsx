import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import { useEffect, useState } from "react";
import ViewMore from "../ViewMore";
import filteringMeal from "../../Utils/filteringMeal";
import { deleteDeli, getAllDeliveries } from "../../services/Delivery";
import { toast } from "react-toastify";

type Props = {};

const DeliManagement = (props: Props) => {
  const [allDelis, setallDelis] = useState<any>();
  const [deliLists, setDeliLists] = useState<any>();
  const token: any = localStorage.getItem("token");
  useEffect(() => {
    getAllDeliveries(token)
      .then((res) => {
        setallDelis(res.data);
        setDeliLists(res.data);
      })
      .catch((res) => {
        toast.error("Fetching getting error, please try again later");
        console.log(res);
      });
  }, []);

  const deleteDelivery = (e: any) => {
    const index = e.target.dataset.index;
    const newDeli = deliLists
      .slice(0, index)
      .concat(deliLists.slice(index + 1));
    deleteDeli(e.target.value, token)
      .then((res: any) => {
        setDeliLists(newDeli);
        toast.success("Delivery has been deleted");
      })
      .catch((error: any) => {
        toast.error("Delete Delivery Fail, Please retry later!");
        console.error(error);
      });
  };
  const filterDeli = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setDeliLists, allDelis);
  };
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Delivery Info
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
                  Delivery Status
                </InputLabel>
                <NativeSelect
                  defaultValue={"all"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => filterDeli(e)}
                >
                  <option value={"all"}>All</option>
                  <option value={"Delivered"}>Delivered</option>
                  <option value={"Ordered"}>Ordered</option>
                  <option value={"Pending"}>Pending</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={8} sm={10}>
            <div className="p-4">
              <table className="table-auto border w-[200x] rounded-md">
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
                  {deliLists != undefined ? (
                    deliLists.map((deli: any, index: any) => (
                      <tr className="border-b">
                        <td className="p-5">{index + 1}</td>
                        <td className="p-5">{deli.delivery_number}</td>
                        <td className="p-5">{deli.status}</td>
                        <td className="p-5">{deli.delivery_address}</td>
                        <td className="p-5">{deli.user.name}</td>
                        <td className="p-5">
                          {deli.riderDelivery === null
                            ? "-----"
                            : deli.riderDelivery.rider.name}
                        </td>
                        <td className="p-2">
                          <Button
                            className="p-2 bg-red-500 rounded-md text-white"
                            value={deli.delivery_id}
                            data-index={index}
                            onClick={(e) => deleteDelivery(e)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
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

export default DeliManagement;
