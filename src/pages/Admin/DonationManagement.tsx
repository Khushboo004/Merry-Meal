import SearchIcon from "@mui/icons-material/Search";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import ViewMore from "./ViewMore";
type Props = {};

const DonationManagement = (props: Props) => {
  return (
    <div className="py-5 mx-3">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Delivery Info
      </h1>
      <div className="grid grid-cols-2 p-5">
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
      </div>
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
      <div className="p-4">
        <table className="table-auto border rounded-md">
          <thead>
            <tr className="border-b-4 border-green-400">
              <th className="p-5">No.</th>
              <th className="p-5">Donor's Name</th>
              <th className="p-5">Payment method</th>
              <th className="p-5">Amount</th>
              <th className="p-5">Member position</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="p-5">1</td>
              <td className="p-5">Aung</td>
              <td className="p-5">Paypal</td>
              <td className="p-5">$ 300</td>
              <td className="p-5">Volunteer</td>
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
              <td className="p-5">1</td>
              <td className="p-5">Aung</td>
              <td className="p-5">Paypal</td>
              <td className="p-5">$ 300</td>
              <td className="p-5">Volunteer</td>
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
      <ViewMore />
    </div>
  );
};

export default DonationManagement;
