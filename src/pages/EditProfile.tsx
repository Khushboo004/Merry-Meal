import { Avatar, TextField, MenuItem, Grid, Container } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import dayjs from "dayjs";
import {
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {};

const EditProfile = (props: Props) => {
  const birth = new Date(2002, 4, 4);
  const bornOn = dayjs(birth);
  const gender = ["Male", "Female"];
  return (
    <div className="p-10 mb-32 mt-7 ">
        <Container maxWidth={'lg'} className="shadow-md">
      <div className="my-3 ">
     
      <div className="flex justify-center ">
        <Avatar sx={{ bgcolor: deepOrange[500], width: 150, height: 150 }}>
          N
        </Avatar>
        
      </div>
      <div className="flex justify-center mt-2">
								<input type="file" name="profileImage"
									placeholder="Change Photo" id="profileImage"/>
							</div>
      </div>
      {/* <Container maxWidth={'lg'}> */}
      <Grid container mt={2} spacing={2} >
      <Grid item  xs={4}>
        <div className="p-3 font-bold  ">Name</div>
        </Grid>
        <Grid item  xs={8}>
        <div className="">
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            defaultValue={"Aung Thiha Tun"}
            style={{ width: "100%" }}
          />
        </div>
        </Grid>
        <Grid item  xs={4}>
    
        <div className="p-3 font-bold">Gender</div>
        </Grid>
        <Grid item  xs={8}>
        <div>
          <TextField
            id="outlined-select-gender"
            select
            label="Select"
            defaultValue="Male"
            helperText="Please Select Your Gender"
            style={{
              width: "100%",
            }}
          >
            {gender.map((gen) => (
              <MenuItem key={gen} value={gen}>
                {gen}
              </MenuItem>
            ))}
          </TextField>
        </div>
     </Grid>
     <Grid item  xs={4}>
        <div className="p-3 font-bold">Birth</div>
        </Grid>
        <Grid item  xs={8}>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={bornOn}
              renderInput={(params) => <TextField {...params} />}
              onChange={() => {}}
            />
          </LocalizationProvider>
       
      
      </div>
      </Grid>
      <Grid item  xs={4}>
        <div className="p-3 font-bold">Contact Number</div>
        </Grid>
        <Grid item  xs={8}>
        <div>
          <TextField
            id="outlined-number"
            label="Phone No."
            type="number"
            defaultValue={959958222263}
            InputLabelProps={{
              shrink: true,
            }}
            helperText="Please Input Your Contact Number"
            style={{
              width: "100%",
            }}
          >
            {gender.map((gen) => (
              <MenuItem key={gen} value={gen}>
                {gen}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </Grid>
      <Grid item  xs={4}>
        <div className="p-3 font-bold">Detail</div>
        </Grid>
        <Grid item  xs={8}>
        <div>
          <TextField
            id="standard-multiline-static"
            label="Summary About You"
            multiline
            rows={4}
            defaultValue="..."
            style={{ width: "100%" }}
          />
        </div>
     </Grid>
     <Grid item  xs={12}>
     <div className="flex justify-center p-3 my-2">
      <button className="p-3 bg-orange-800 text-xl font-bold hover:bg-orange-700 text-white rounded-lg">Change</button>
      </div>
      </Grid>
     </Grid>
    </Container>
    </div>
  );
};

export default EditProfile;
