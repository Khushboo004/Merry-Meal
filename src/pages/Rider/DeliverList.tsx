import { getAllDeliveries } from "../../services/Delivery";
import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TakeOrderButton from "./TakeOrderButton";
import { Link } from "react-router-dom";
import ViewMore from "../ViewMore";
import { toast } from "react-toastify";
import DeliveryStatus from "../../Utils/DeliStatus";
import filteringMeal from "../../Utils/filteringMeal";
import { getPersonalProfile } from "../../services/ProfileService";

type Props = {};

const DeliverList = (props: Props) => {
  const [allDelis, setallDelis] = useState<any>();
  const [deliLists, setDeliLists] = useState<any>();
  const token: any = localStorage.getItem("token");
  const [user, setUser] = useState<any>();
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

    getPersonalProfile(token)
      .then((res) => setUser(res.data))
      .catch((error) => {
        toast.error("Fetching getting error, please try again later");
        console.log(error);
      });
  }, []);
  const filterMeal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setDeliLists, allDelis);
  };
  return (
    <div>
      <Container maxWidth={"xl"}>
        <Grid container mt={2} spacing={2}>
          <Grid item lg={2} sm={0.1} xs={0.1}></Grid>
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
                  onChange={(e) => filterMeal(e)}
                >
                  <option value={"all"}>All</option>
                  <option value={"Ordered"}>Ordered</option>
                  <option value={"Pending"}>Pending</option>
                  <option value={"Delivered"}>Delivered</option>
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item lg={2} xs={0.1}></Grid>
          <Grid item lg={2} xs={0.1}></Grid>
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
                  {deliLists != undefined ? (
                    deliLists.map((deli: any, index: any) => (
                      <tr className="border-b">
                        <td className="p-5">{index + 1}</td>
                        <td className="p-5">{deli.delivery_number}</td>
                        <td className="p-5">{deli.status}</td>
                        <td className="p-5">{deli.delivery_address}</td>
                        <td className="p-5">{deli.user.name}</td>
                        <td className="p-5">
                          {deli.riderDelivery != null
                            ? deli.riderDelivery.rider.name
                            : "----"}
                        </td>
                        <td className="p-2">
                          <Link
                            to={"/rider/deliveries/detail/" + deli.delivery_id}
                          >
                            <Button
                              className="p-2 bg-red-500 rounded-md text-white mb-5"
                              value={deli.delivery_id}
                              data-index={index}
                            >
                              View Detail
                            </Button>
                          </Link>
                          {deli.status === DeliveryStatus.Order ? (
                            deli.riderDelivery.rider.user_id ===
                            user.user_id ? (
                              <>
                                <TakeOrderButton
                                  deliId={deli.delivery_id}
                                  status={deli?.status}
                                />
                              </>
                            ) : (
                              <></>
                            )
                          ) : deli.status === DeliveryStatus.Delivered ? (
                            <></>
                          ) : (
                            <TakeOrderButton
                              deliId={deli.delivery_id}
                              status={deli?.status}
                            />
                          )}
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

export default DeliverList;
