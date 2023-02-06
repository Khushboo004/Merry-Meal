import React, { useEffect, useState } from "react";
import Pic from "../../../assets/caregiver.png";
import {
  Box,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { getAllSession } from "../../../services/SessionService";
import { getPersonalProfile } from "../../../services/ProfileService";
import { toast } from "react-toastify";
type Props = {
  role: String;
};

const AvailableCareGiver  = (props: Props) => {
  const { role } = props;
  const [sessions, setSessions] = useState<any>();
  const token: any = localStorage.getItem("token");
  const [allMeals, setAllMeals] = useState<any>();

  const BreakError = {};
  useEffect(() => {
        // if (role === "MEMBER" ) {
      // getAllSession(token)
      //   .then((res) => {
      //     let avaliableCaregiver = res.data.filter((sessionStatus: any) => sessionStatus.status === "Available"
      //     );
      //     setSessions(avaliableCaregiver);
      //     return;
      //   })
      //   .catch((error) => {
      //     toast.error("Error While Fetching, Please retry later!");
      //   });
      // }
      getAllSession(token)
        .then((res) => {
          console.log(res)
          
          const newArray =  res.data.slice(0, 4);
          setSessions(newArray);
          
          return;
        })
        .catch((error) => {
          toast.error("=========");
          console.log(error)
        });
      return;
      
    }, []);
  

 
  
  return (
    <div>
      <div className="py-3 bg-slate-100">
        <Container maxWidth="xl" className="pb-5">
          <div className="lg:px-5">
            <Box margin={2} py={1}>
              <Grid container spacing={4}>
                <Grid item lg={6} xs={6}>
                  <div className="text-left">
                    <h1 className="text-xl font-bold">Available Caregiver</h1>
                  </div>
                </Grid>
                <Grid item lg={6} xs={6}>
                  <div className="text-right">
                    <a href="#" className="font-serif">
                      View All
                    </a>
                  </div>
                </Grid>
              </Grid>
              <div style={{ borderTop: "2px solid gray " }}></div>
            </Box>
          </div>
          <div className="lg:px-5">
            <Box margin={2}>
              <Grid container spacing={4}>
              {sessions != undefined
                    ? sessions.map((session: any, index: any) => (

                        
                        <Grid item lg={3} md={4} sm={4} xs={6}  direction="row-reverse">
                        <Card elevation={10} className="shadow-xl">
                        <Box style={{ display: "flex", justifyContent: "center"}} className="pt-1">
    
                        
                          <CardMedia
                            style={{
                                       
                              backgroundSize:"cover",width: "30%", height:"50%"}}
                            component="img"
                            alt="green iguana"
                            height="90"
                            image={Pic}
                          />
                          </Box>
                         
                        <Typography style={{justifyContent: "center" }} className="p-3"
                         
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
                      
                      <CardActions
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                       
                          <Box className="justify-between items-center lg:text-no md:text-center sm:text-center xs:text-center">
      <Button  className='  w-full  my-2 font-bold ' color='info' variant='contained' >Send Request</Button>
      
      <a href="/profile"><Button className=' w-full   font-bold bg-gray-700'   variant='contained'>Details</Button>
      </a>      </Box>
                        
                      </CardActions>
                        </Card>
                      </Grid>
                      )
                    )
                 : ""}

                
               


                
                
              </Grid>
            </Box>
          </div>
        </Container>
      </div>

      {/* </Container> */}
    </div>
  );
};

export default AvailableCareGiver;
