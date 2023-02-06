import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Time from "../../assets/time.png";
import { toast } from "react-toastify";
import { addNewSession, getAllSession } from "../../services/SessionService";
import { getPersonalProfile } from "../../services/ProfileService";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
type Props = {
  role: String;
};
const TimeTable = (props: Props) => {
  const { role } = props;

  const [caregiver, setCaregiver] = useState({
    session: "",
    date: "",
  });
  const fieldChanged = (event: any) => {
    setCaregiver({ ...caregiver, [event.target.name]: event.target.value });
  };
  const [sessions, setSessions] = useState<any>();
  const token: any = localStorage.getItem("token");

  useEffect(() => {
    getPersonalProfile(token)
      .then((res) => {
        const user = res.data;

        getAllSession(token)
          .then((res) => {
            let cargiverSessions = res.data.filter(
              (session: any) => session.user.user_id === user.user_id
            );
            setSessions(cargiverSessions);
            return;
          })
          .catch((error) => {
            toast.error("Error While Fetching, Please bnnv bnvbn retry later!");
          });
      })
      .catch((error) => {
        toast.error("Error While Fetching, Please retry later!");
      });
  }, []);

  const addSession = (event: any) => {
    event.preventDefault();
    // console.log(post);
    if (caregiver.session.trim() === "") {
      toast.error("Session is Required");
      return;
    }
    if (caregiver.date.trim() === "") {
      toast.error("Date is Required");
      return;
    }

    // submit the form on surver
    addNewSession(caregiver, token)
      .then((res) => {
        console.log(token + "====================================");
        console.log(res.data.fundId);

        toast.success("Session have  Uploaded Successfully");
        console.log(caregiver);
        setCaregiver({
          session: "",
          date: "",
        });
      })
      .catch((error) => {
        toast.error("Session is not uploaded due to some error !! ");
        console.log(error);
      });
  };

  return (
    <div className=" ml-3">
      <Grid container spacing={3}>
        {role === "CAREGIVER" ? (
          <Grid item xs={12} sm={12} lg={3} md={4}>
            <div className="shadow-lg border m-3 mt-0  md:mt-16">
              <div className="flex min-h-full items-center justify-center py-12 px-0 sm:px-6 lg:px-4">
                <div className="w-full max-w-md space-y-8">
                  <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                      Add Your Caregive Time
                    </h2>
                  </div>

                  <form onSubmit={addSession}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                      <div>
                        <label htmlFor="date" className="sr-only">
                          Give Date
                        </label>
                        <input
                          onChange={fieldChanged}
                          id="date"
                          name="date"
                          type="date"
                          className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          placeholder="Date"
                        />
                      </div>
                      <div className="pt-4">
                        <label htmlFor="session" className="sr-only">
                          Session Time
                        </label>
                        <select
                          onChange={fieldChanged}
                          defaultValue={0}
                          name="session"
                          className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'
                        >
                          <option disabled value={0}>
                            --- Set Time --
                          </option>
                          <option>11:00am-01:00pm</option>
                          <option>01:00pm-03:00pm</option>
                          <option>03:00pm-05:00pm</option>
                          <option>05:00pm-07:00pm</option>
                          <option>07:00am-09:00pm</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="sm:pl-20 pl-10">
                        <button className=" bg-sky-600 mt-2 py-2 font-bold  hover:bg-sky-700  700   w-10/12   text-white rounded-md  ">
                          Set Time
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Grid>
        ) : (
          <></>
        )}
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <h1 className="text-center text-xl font-bold my-2 p-2 uppercase font-serif underline underline-offset-4">
            My Time Table
          </h1>
          <Grid container spacing={3}>
          {sessions != undefined
                    ? sessions.map((session: any, index: any) => (
            <Grid item lg={2.5} md={4} sm={6} xs={6}>
              <Card elevation={10}>
                <Box style={{ display: "flex", justifyContent: "center"}} className="pt-1">
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{
                                 
                      backgroundSize:"cover",width: "30%", height:"50%"}}
                    image={Time}
                  />
                </Box>
                <CardContent>
                  <Typography
                    className="sm:text-[15px] text-[14px]"
                    color="text.dark"
                  >
                     <h1>
                      <span className="font-bold">Name: </span>{session.user.name}
                    </h1>
                    <h1>
                      <span className="font-bold">Date: </span>{session.date}
                    </h1>
                    <h1>
                      <span className="font-bold">Session: </span>{session.session}
                    </h1>
                    <h1>
                      <span className="font-bold text-green-700">Status: </span>{session.status}
                    </h1>
                    <h1>
                      <span className="font-bold">Phone No: </span>{session.user.phone_number}
                    </h1>
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    textAlign={"center"}
                    display={"block"}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                     <Link to={"/caregiver/edit-session/"+session.session_id} >
                    <Button
                      className="mr-5 text-[15px] font-bold"
                      color="info"
                      variant="contained"
                    >
                      EDIT
                    </Button>
                    </Link>
                  </Box>
                </CardActions>
                </Card>
            </Grid>
            ))
             : ""}
             </Grid>
          </Grid>
        </Grid>
    </div>
  );
};
export default TimeTable;
