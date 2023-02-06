import React, { useEffect, useState } from "react";

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
import Time from "../assets/time.png";
import { getAllSession, requestForCaregiver } from "../services/SessionService";
import { getPersonalProfile } from "../services/ProfileService";
import filteringMeal from "../Utils/filteringMeal";
import { useParams } from "react-router-dom";
type Props = {
  role: String;
};

const CaregiverReq = (props: Props) => {
  const { role } = props;
  const [allSessions, setAllSessions] = useState<any>();
  const [sessions, setSessions] = useState<any>();
  const token: any = localStorage.getItem("token");
  

  useEffect(() => {
    if (role === "MEMBER") {
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
        
        getAllSession(token)
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
 
  function requestForCareGiver (session: any){
    
    // console.log(car)
    requestForCaregiver(session.session_id,token)
    .then((res)=>{
      console.log(token+"+++++++++++++frtrytytyt+++++++++++"+res);
      toast.success("sended request");
      
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error in loading session");
    });
  };

  

  return (
    <div className='mb-10'>
      <div>
      <h1 className="text-center text-xl font-bold my-2 p-2 uppercase font-serif underline underline-offset-4">
            My Time Table
          </h1>
      <Grid container spacing={3}>
      {/* {role === "MEMBER" ? ( */}
      <Grid item xs={12}>
              <Box pt={6} style={{
                                display: "flex",
                                justifyContent: "center",
                                
                              }}>
                                 
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
              {/* ) : (
                <></>
              )} */}

        <Grid item xs={12} >
         
          <Grid container spacing={3} >
          {sessions != undefined
                    ? sessions.map((session: any, index: any) => (
            <Grid item lg={2} md={4} sm={4} xs={6}>
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
                <CardContent  >
                  <Typography style={{justifyContent: "center" }}
                   
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
                 
                    <Box className="justify-between items-center lg:text-no md:text-center sm:text-center xs:text-center">
<Button  onClick={() =>  requestForCareGiver(session)} className='  w-full  my-2 font-bold ' color='info' variant='contained' >Send Request</Button>

<a href="/profile"><Button className=' w-full   font-bold bg-gray-700'   variant='contained'>Details</Button>
</a>      </Box>
                  
                </CardActions>
              </Card>
            </Grid>
             ))
             : ""}
          </Grid>
        </Grid>
       
      </Grid>
   </div>



    </div>
  )
}

export default CaregiverReq