import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import ViewMore from "../ViewMore";
import { Container, Grid } from "@mui/material";
type Props = {};
const UserInfo = (props: Props) => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        User Info
      </h1>
      <Container maxWidth={'xl'} >
        <Grid container mt={2} spacing={2}>
         <Grid item lg={2} xs={.1}></Grid>
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
        <div className="add flex justify-end">
          <button className="px-5 py-2 bg-blue-500 text-white rounded-lg mr-16">
            Add
          </button>
        </div>
        </Grid>
         <Grid item lg={2} xs={.1}></Grid>
         <Grid item lg={2} xs={.1}></Grid>
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
         <Grid item lg={2} xs={.1}></Grid>
         <Grid item lg={2} xs={.1}></Grid>
        <Grid item lg={8} sm={10}>
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead>
            <tr className="border-b-4 border-green-400">
              <th className="p-5">No.</th>
              <th className="p-5">Name</th>
              <th className="p-5">Birth</th>
              <th className="p-5">Phone No.</th>
              <th className="p-5">Email</th>
              <th className="p-5">Gender</th>
              <th className="p-5">Profile</th>
              <th className="p-5">Position</th>
              <th className="p-5">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">Aung Thiha</td>
              <td className="p-2">5-4-2002</td>
              <td className="p-2">+95 9958222263</td>
              <td className="p-2">aung@gmail.com</td>
              <td className="p-2">Female</td>
              <td className="p-2">picture</td>
              <td className="p-2">Web Developer</td>
              <td className="p-2">
                <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                  Edit
                </button>
                <button className="p-2 bg-red-500 rounded-md text-white ">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">Aung Thiha</td>
              <td className="p-2">5-4-2002</td>
              <td className="p-2">+95 9958222263</td>
              <td className="p-2">aung@gmail.com</td>
              <td className="p-2">Female</td>
              <td className="p-2">picture</td>
              <td className="p-2">Web Developer</td>
              <td className="p-2">
                <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                  Edit
                </button>
                <button className="p-2 bg-red-500 rounded-md text-white ">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">Aung Thiha</td>
              <td className="p-2">5-4-2002</td>
              <td className="p-2">+95 9958222263</td>
              <td className="p-2">aung@gmail.com</td>
              <td className="p-2">Female</td>
              <td className="p-2">picture</td>
              <td className="p-2">Web Developer</td>
              <td className="p-2">
                <button className="p-2 bg-green-500 rounded-md text-white mr-3">
                  Edit
                </button>
                <button className="p-2 bg-red-500 rounded-md text-white ">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="p-2">1</td>
              <td className="p-2">Aung Thiha</td>
              <td className="p-2">5-4-2002</td>
              <td className="p-2">+95 9958222263</td>
              <td className="p-2">aung@gmail.com</td>
              <td className="p-2">Female</td>
              <td className="p-2">picture</td>
              <td className="p-2">Web Developer</td>
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
         <Grid item lg={2} xs={.1}></Grid>
     </Grid>
     </Container>
      <ViewMore />
    </div>
  );
};

export default UserInfo;
