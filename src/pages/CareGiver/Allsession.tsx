import React, { useEffect, useState } from "react";
import { getPersonalProfile } from "../../services/ProfileService";
import { getAllSession } from "../../services/SessionService";
import { toast } from "react-toastify";
import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
} from "@mui/material";
import filteringMeal from "../../Utils/filteringMeal";
import Time from "../../assets/time.png";

type Props = {
  role: String;
};
const Allsession = (props: Props) => {
  const { role } = props;
  const [allSessions, setAllSessions] = useState<any>();
  const [sessions, setSessions] = useState<any>();
  const token: any = localStorage.getItem("token");

  useEffect(() => {
    if (role === "MEMBER" ) {
      getAllSession(token)
        .then((res) => {
          console.log(res)
          let avaliableCaregiver = res.data.filter((sessionStatus: any) => sessionStatus.status === "Available"
          );
          setAllSessions(avaliableCaregiver);
          setSessions(avaliableCaregiver);
          return;
        })
        .catch((error) => {
          toast.error("=========");
          console.log(error)
        });
      return;
    }

    getPersonalProfile(token)
      .then((res) => {
        const user = res.data;
        console.log(user);
        
        getAllSession()
          .then((res) => {
            let cargiverSessions = res.data.filter(
              (session: any) => session.user.user_id === user.user_id
            );
            setAllSessions(cargiverSessions);
            setSessions(cargiverSessions);
            return;
          })
          .catch((error) => {
            toast.error("Error While Fetching, Please retry later!");
          });
      })
      .catch((error) => {
        toast.error("Error While Fetching, Please retry later!");
      });
  }, []);
  const filterSession = (e: React.ChangeEvent<HTMLSelectElement>) => {
    filteringMeal(e, setSessions, allSessions);
  };

  return (
    <div>
      <Grid container spacing={3}>
      {role === "MEMBER" ? (
      <Grid item xs={12}>
              <Box pt={6}>
                <FormControl className="w-[200px] ">
                  <InputLabel
                    className="text-xl"
                    variant="standard"
                    htmlFor="uncontrolled-native"
                  >
                    Meals Type
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"all"}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                    onChange={(e) => filterSession(e)}
                  >
                    <option value={"all"}>All</option>
                    <option value={"11:00am-01:00pm"}>11:00am-01:00pm</option>
                    <option value={"01:00pm-03:00pm"}>01:00pm-03:00pm</option>
                    <option value={"03:00pm-05:00pm"}>03:00pm-05:00pm</option>
                    <option value={"05:00pm-07:00pm"}>05:00pm-07:00pm</option>
                    <option value={"07:00am-09:00pm"}>07:00am-09:00pm</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
              ) : (
                <></>
              )}

        <Grid item xs={12} >
          <h1 className="text-center text-xl font-bold my-2 p-2 uppercase font-serif underline underline-offset-4">
            My Time Table
          </h1>
          <Grid container spacing={3}>
          {sessions != undefined
                    ? sessions.map((session: any, index: any) => (
            <Grid item lg={2.5} md={4} sm={6} xs={6}>
              <Card elevation={10}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    sx={{ width: "90%" }}
                    component="img"
                    alt="green iguana"
                    height="90"
                    className="text-center"
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
                    <Button
                      className="mr-5 text-[15px] font-bold"
                      color="info"
                      variant="contained"
                    >
                      Edit
                    </Button>
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

export default Allsession;
