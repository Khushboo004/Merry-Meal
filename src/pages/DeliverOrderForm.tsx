import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { orderMeal } from "../services/Delivery";

export default function DeliverOrderForm() {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [error, setError] = useState("");
  const { mealId } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!deliveryAddress) {
      setError("Delivery address is required");
      toast.error("Delivery address is required");
      return;
    }
    const token = localStorage.getItem("token");
    orderMeal(mealId, token, deliveryAddress)
      .then((res) => {
        toast.success(
          "Order has been posted with delivery number " +
            res.data.delivery_number
        );
        navigate("/member/meals");
      })
      .catch((error) => {
        console.log(error);

        toast.error("Posting order failed, Please retry later!");
      });
  };

  return (
    <div className="pb-72">
      <Grid container spacing={2}>
        <Grid item xs={2} sm={3} lg={2} md={2}>
          <p></p>
        </Grid>
        <Grid
          item
          xs={7}
          sm={3}
          lg={7}
          md={7}
          className="border mt-20 pt-5 pr-5"
        >
          <div className=" text-white">
            <div className="pt-5 card bg-green-900 shadow justify-center ">
              <Typography variant="h6" className=" text-center">
                Delivery Form
              </Typography>
              <p className="text-center">
                Give your address to receive your order
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-1 card bg-white shadow justify-center">
                <textarea
                  id="delivery_address"
                  name="delivery_address"
                  className="border relative block w-full appearance-none hover:bg- rounded-none bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                  placeholder="Give Delivery Address"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className=" m-2 text-center">
                <button
                  type="submit"
                  className="p-2 w-28 font-bold rounded-md bg-blue-800"
                >
                  Order
                </button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={2} sm={2} lg={3} md={2}>
          <p></p>
        </Grid>
      </Grid>
    </div>
  );
}
