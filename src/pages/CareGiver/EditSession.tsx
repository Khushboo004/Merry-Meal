import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleSessionDetails, updateSessions } from '../../services/SessionService';
import { toast } from 'react-toastify';

const EditSession = () => {
    const { sessionId } = useParams();
    const token = localStorage.getItem("token");
    const [caregiver, setCaregiver] = useState({
        session: "",
        date: "",
        status:"",
      });
      useEffect(() => {
        getSingleSessionDetails(sessionId,token)
          .then((data) => {
            console.log(data+"++++++++++++++++++++++");
            setCaregiver(data);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error in loading session");
          });
      }, []);


      const handleChange = (event: any, fieldName: any) => {
        console.log(fieldName + " " + event.target.value);
        setCaregiver({
          ...caregiver,
          [fieldName]: event.target.value,
        });
      };

      const updateSessionDetails = (event: any) => {
        event.preventDefault();
        // console.log(car)
        updateSessions({ ...caregiver }, token)
          .then((res) => {
            console.log(res);
            toast.success("Session details updated");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Error in upading meal details");
          });
      };
  return (
   
         <div className=" ml-3">
      <Grid container spacing={3}>
    
      <Grid item xs={12} sm={12} lg={3} md={4}>

          <div className="shadow-lg border m-3 mt-0  md:mt-16">
            <div className="flex min-h-full items-center justify-center py-12 px-0 sm:px-6 lg:px-4">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Add Your Caregive Time
                  </h2>
                </div>

                <form onSubmit={updateSessionDetails}>
                  <input type="hidden" name="remember" value="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <div>
                      <label htmlFor="date" className="sr-only">
                        Give Date
                      </label>
                      <input
                      value={caregiver.date}
                      onChange={(event) => handleChange(event, "date")}
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
                      value={caregiver.session}
                      onChange={(event) => handleChange(event, "session")}
                        defaultValue={0}
                        name="session"
                        className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'
                      >
                        <option disabled value={0}>
                          --- Set Time --
                        </option>
                        <option value={"11:00am-01:00pm"}>11:00am-01:00pm</option>
                        <option value={"01:00pm-03:00"}>01:00pm-03:00pm</option>
                        <option value={"3:00pm-05:00pm"}>03:00pm-05:00pm</option>
                        <option value={"05:00pm-07:00pm"}>05:00pm-07:00pm</option>
                        <option value={"07:00am-09:00pm"}>07:00am-09:00pm</option>
                      </select>
                    </div>
                    <div className="pt-4">
                      <label htmlFor="session" className="sr-only">
                        Session Time
                      </label>
                      <select
                      value={caregiver.status}
                      onChange={(event) => handleChange(event, "status")}
                        defaultValue={0}
                        name="status"
                        className='relative block w-full appearance-none rounded-none bg-white  border border-gray-300 px-3 py-2 focus:z-10 focus:outline-none sm:text-sm" placeholder="Give the catagory'
                      >
                        <option disabled value={0}>
                          --- Set Status --
                        </option>
                        <option>Available</option>
                        <option>Unavilable</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="sm:pl-20 pl-10">
                      <button 
                      onClick={(e) => updateSessionDetails(e)}
                      className=" bg-sky-600 mt-2 py-2 font-bold  hover:bg-sky-700  700   w-10/12   text-white rounded-md  ">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
         
       
        </Grid>
        </Grid>
        
    </div>
  )
}

export default EditSession