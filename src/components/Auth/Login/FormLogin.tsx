import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import React, { useState } from "react";
import Google  from "../../../assets/google.png";

interface FormData {
  email: string;
  password: string;
}

const initialFormData: FormData = {
  email: "",
  password: "",
};

const FormLogin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState<boolean>(false);

  const validate = (): boolean => {
    const errors: Partial<FormData> = {};
    
    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    if (validate()) {
      console.log("Form is valid, send data to the server");
      // Do something with the form data here
    }
    setSubmitting(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="shadow-lg bg-white ">
      <div className=" rounded-lg w-full">
        <Typography variant="h6" className="text-center text-3xl py-5 pt-10 font-bold uppercase font-serif">
         Login
        </Typography>

        <form onSubmit={handleSubmit}>
         
          <div className="form-group mb-1 sm:pl-20 pl-10">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control block
          w-10/12
          px-3
    
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none required"
            />
            {formErrors.email && <div>{formErrors.email}</div>}
          </div>
          <div className="form-group mb-1 sm:pl-20 pl-10">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control block
          w-10/12
             px-3
             py-1.5
             text-base
             font-normal
             text-gray-700
             bg-white bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             m-0
             focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
            />
            {formErrors.password && <div>{formErrors.password}</div>}
          </div>
          <Box className="sm:pl-20 pl-10">
          <button className=" bg-sky-600 mt-2 py-2 font-bold  hover:bg-sky-700  700   w-10/12   text-white rounded-md  ">
            Submit
          </button>
        
          </Box>
          <Box className="sm:pl-20 pl-10" >
          <Grid container  className=" text-center inline-block 700  w-10/12">
          <Grid item xs={12} className="">
                                      <Box className="mx-3 my-2">
                                        <Box
                                          sx={{ display: "flex" }}
                                        ><Grid container>
                                          <Grid item xs={5.5}>
                                          <div style={{ borderTop: "2px solid gray " }} className="mt-2"></div>

                                          </Grid>
                                          <Grid item xs={1} >
                                          <div className="text-[14px] text-center top-0">
                                            OR
                                          </div>
                                          </Grid>
                                          <Grid item xs={5.5}>
                                          <div style={{ borderTop: "2px solid gray " }} className="mt-2"></div>

                                          </Grid>
                                          </Grid>
                                        </Box>
                                      </Box>
                                    </Grid>
                                  </Grid>
          </Box>
          <h1 className=" font-serif text-center mb-2 underline underline-offset-4">Login with social media account</h1>
          <Box className=" sm:pl-20 pl-10">
          <a href="/meal-details">
              <button className=" bg-gray-50  mb-2 py-2 font-bold  shadow-md hover:bg-gray-100 w-10/12 rounded-lg  ">
              <img
                        className="w-[30px] inline-block h-8 mr-2"
                        src={Google}
                        alt="/"
                      />{" "} Sign in with Google
              </button>
            </a>
          
            <a href="/meal-details">
            <button className=" bg-blue-600 mt-2 py-2 font-bold w-10/12 hover:bg-blue-700  700     text-white rounded-md  ">

              {/* <button className=" bg-green-600 py-2  my-1 font-bold  sm:text-[15px] text-[12px] mr-2 hover:bg-green-700  w-[56px]  text-white rounded-md mx-auto "> */}
              <FacebookIcon className="mr-3"/>Log in with facebook
              </button>
  
            </a>
           
           
          </Box>
        </form>
        <Box className="pb-2 mb-2">
        <p className="text-gray-800 mt-4  text-center">
         
          Not a member?
            <a
              href="/register"
              className="text-blue-600 hover:text-blue-700 ml-2 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
             
            </a>
          </p>
        </Box>
      </div>
    </div>
  );
};

export default FormLogin;