import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ViewMore from "../ViewMore";
import { Button, Container, Grid } from "@mui/material";
import MultipleSelectRole from "../../components/Security/MultipleSelectRole";
import { useEffect, useState } from "react";
import { deleUser, getUsers } from "../../services/ProfileService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
type Props = {};
const UserInfo = (props: Props) => {
  const [users, setUsers] = useState<any>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUsers(token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const deleteUser = (e: any) => {
    const token = localStorage.getItem("token");
    const index = e.target.dataset.index;
    const newUsers = users.slice(0, index).concat(users.slice(index + 1));
    console.log("Hi delete");

    deleUser(token, e.target.value)
      .then((res) => {
        setUsers(newUsers);
        toast.success(res.data);
      })
      .catch((error) => {
        toast.error("Delete Meal Fail, Please retry later!");
        console.error(error);
      });
  };

  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        User Info
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
                  Position
                </InputLabel>
                <NativeSelect
                  defaultValue={"all"}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={"all"}>All</option>
                  <option value={"Volunteer"}>Volunteer</option>
                  <option value={"Member"}>Member</option>
                  <option value={"Partner"}>Partner</option>
                  <option value={"Care giver"}>Care giver</option>
                  <option value={"Rider"}>Rider</option>
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
                    <th className="p-5">Name</th>
                    <th className="p-5">Birth</th>
                    <th className="p-5">Phone No.</th>
                    <th className="p-5">Gender</th>
                    <th className="p-5">Profile</th>
                    <th className="p-5">Roles</th>
                    <th className="p-5">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {users != undefined
                    ? users?.map((user: any, index: any) => (
                        <tr>
                          <td className="p-2">{index + 1}</td>
                          <td className="p-2">{user.name}</td>
                          <td className="p-2">{user.birth}</td>
                          <td className="p-2">{user.phone_number}</td>
                          <td className="p-2">{user.gender}</td>
                          <td className="p-2">{user.profile}</td>
                          <td className="p-2">
                            <MultipleSelectRole userId={user.user_id} />
                          </td>
                          <td className="p-2 flex space-x-4">
                            <Link
                              to={"/admin/userinfo/edit?userId=" + user.user_id}
                            >
                              <Button className="p-2 bg-green-500 rounded-md text-white mr-3">
                                Edit
                              </Button>
                            </Link>
                            <Button
                              className="p-2 bg-red-500 rounded-md text-white"
                              value={user.user_id}
                              data-index={index}
                              onClick={(e) => deleteUser(e)}
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

export default UserInfo;
