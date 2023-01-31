import React from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import { Box, Container, Grid } from "@mui/material";
import FreeOrder from "../assets/about/free order.png";
import Partner from "../assets/about/partner.png";
import Volunteer from "../assets/about/volunteer.jpeg";
import Rider from "../assets/about/delivery.png";
import Caregiver from "../assets/about/caregiver.avif";
import Footer from "../components/Layout/Footer/Footer";

const AboutUs = () => {
  return (
    <div>
   
      <div>
        <h1 className="text-center font-serif bg-gray-200 text-3xl  p-2 m-0 font-bold text-red-600 uppercase">
          About Us
        </h1>
      </div>

<div className="mb-5">
<Container maxWidth="xl" >
      {/* Free Meal */}
      <div className="">
      
        <div>
          <Grid
            container
            mt={0}
            spacing={2}
            className="justify-between items-center" >
            <Grid item md={4} sm={12} xs={12}>
              <Box>
                <img
                  className=" sm:w-[250px] w-[200px] mx-auto py-2"
                  src={FreeOrder}
                  alt="/"
                />
              </Box>
            </Grid>
            <Grid item md={8} sm={12} xs={12}>
              <Box>
                <h1 className="text-center font-bold text-green-800 text-3xl pb-6 underline-offset-8 uppercase underline decoration-gray-800">
                  Free Meal
                </h1>
                <span className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium dolore reiciendis et? Est iste cupiditate nam qui.
                  Architecto quos sit incidunt ipsa alias sint doloremque,
                  nesciunt, sed in eaque qui doloribus tempore distinctio
                  blanditiis dicta nulla sequi repellendus vel ad. Ipsam
                  repellendus quae enim laborum, dignissimos soluta omnis sed
                  esse reprehenderit beatae ipsum cum quaerat incidunt rem quos
                  aperiam similique? Mollitia porro, quaerat cum quia voluptates
                  facere repellendus corporis tenetur quidem perferendis
                  deleniti reprehenderit ducimus sunt, facilis eius adipisci
                  unde, vel voluptatum amet. Ducimus facilis atque repudiandae
                  nesciunt distinctio reprehenderit quibusdam perferendis quis
                  dicta fugit, officiis veritatis, neque culpa magnam?
                </span>
              </Box>
            </Grid>
          </Grid>
        </div>
      {/* </Container> */}
      </div>


      <div style={{ borderTop: "1px solid gray  " }} ></div>


      {/* About Partners */}
      <div className="bg-white">
      {/* <Container maxWidth="xl"> */}
        <div>
          <Grid
            container
            mt={0}
            spacing={2}
            className="justify-between items-center"
          >
            <Grid item md={6} sm={7} xs={12}>
              <Box>
                <h1 className="text-center font-bold text-green-600 text-3xl pb-6 underline-offset-8 uppercase underline decoration-gray-800">
                  About Partners
                </h1>
                <span className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  nesciunt a, molestiae non minima impedit eveniet reprehenderit
                  est doloribus ducimus quos delectus quaerat ullam? Dolorum
                  facilis laboriosam atque iure ab minus a accusantium molestias
                  modi? Amet, qui dolorum accusantium corrupti veritatis dolor
                  soluta nulla nam eveniet voluptatum quis earum quisquam
                  dolores nostrum quas inventore omnis autem reprehenderit
                  excepturi officiis.
                </span>
              </Box>
            </Grid>
            <Grid item md={4} sm={5} xs={12}>
              <Box>
                <img
                  className="sm:w-[300px] w-[250px] mx-auto py-2"
                  src={Partner}
                  alt="/"
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      {/* </Container> */}
      </div>


      <div style={{ borderTop: "1px solid gray  " }} className="mx-1"></div>






      




      {/* About Volunteer */}
      <div className="bg-white">
      {/* <Container maxWidth="xl"> */}
        <div>
          <Grid
            container
            mt={0}
            spacing={2}
            className="justify-between items-center"
          >
            <Grid item md={4} sm={5} xs={12}>
              <Box>
                <img
                  className="sm:w-[400px] w-[250px] mx-auto "
                  src={Volunteer}
                  alt="/"
                />
              </Box>
            </Grid>
            <Grid item md={6} sm={7} xs={12}>
              <Box>
                <h1 className="text-center font-bold text-blue-500 text-3xl pb-6 underline-offset-8 uppercase underline decoration-gray-800">
                  About Volunteers
                </h1>
                <span className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  hic consectetur sunt voluptatibus voluptatem voluptates? Quia
                  aut dicta veniam, accusantium saepe in pariatur consequatur
                  vitae perspiciatis eius doloremque est, voluptas reiciendis
                  amet, vel aliquam placeat nisi error excepturi sunt aperiam.
                </span>
              </Box>
            </Grid>
          </Grid>
        </div>
      {/* </Container> */}
      </div>
      <div style={{ borderTop: "1px solid gray  " }} ></div>



      
      {/* About Riders & CareGiver */}
      {/* <Container maxWidth="xl"> */}
        <div>
          <Grid
            container
            mt={0}
            spacing={2}
            className="justify-between items-center"
          >
            {/* About Riders  */}
            <Grid item md={6} sm={6} xs={12}  paddingBottom={2}>
              <Grid
                container
                mt={0}
                spacing={2}
                className="justify-between items-center border-b-2 border-black   sm:border-r-4 sm:border-b-0"
              >
                <Grid item md={4} sm={12} xs={12}>
                  <Box>
                    <img
                      className="sm:w-[350px] w-[300px] mx-auto py-2"
                      src={Rider}
                      alt="/"
                    />
                  </Box>
                </Grid>
                <Grid item md={6} sm={12} xs={12} marginRight={5}>
                  <Box>
                    <h1 className="text-center font-bold text-green-600 text-3xl pb-6 underline-offset-8 uppercase underline decoration-gray-800">
                    About Riders 
                    </h1>
                    <span className="text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. At cupiditate impedit blanditiis quibusdam nam nostrum ipsa ipsam! Pariatur consequuntur veritatis, doloremque, voluptatum aliquid aspernatur totam assumenda, minus et id dolorum?
                    </span>
                  </Box>
                </Grid>
                
              </Grid>
            </Grid>



            {/* About CareGiver */}
            <Grid item md={6} sm={6} xs={12}  paddingBottom={2}>
              <Grid
                container
                mt={0}
                spacing={0}
                className="justify-between items-center"
              >
                <Grid item md={6} sm={12} xs={12} >
                  <Box>
                    <h1 className="text-center font-bold text-green-600 text-3xl pb-6 underline-offset-8 uppercase underline decoration-gray-800">
                    About CareGiver
                    </h1>
                    <span className="text-justify">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis suscipit ratione veniam voluptates totam esse nobis perspiciatis, qui, odit praesentium ab non illum ipsum deleniti? Repudiandae incidunt sunt saepe quasi.
                    </span>
                  </Box>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <Box>
                    <img
                      className="sm:w-[300px] w-[250px] mx-auto py-2"
                      src={Caregiver}
                      alt="/"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
</div>
     
     
    </div>
  );
};

export default AboutUs;
