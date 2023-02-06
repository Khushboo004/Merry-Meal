import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changeDeliStatus, getSingleDeli } from "../../services/Delivery";
import DeliveryStatus from "../../Utils/DeliStatus";

type Props = {
  deliId: any;
  status : any;
};

const TakeOrderButton = (props: Props) => {
  const navigate = useNavigate();
  const { deliId, status } = props;
  const token = localStorage.getItem("token");
  const takeOrder = (e: any, status: any) => {
    changeDeliStatus(deliId, token, status)
      .then((res) => {
        window.location.reload();
        toast.success("You have successfully took the order 🌟");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {status === DeliveryStatus.Order ? (
        <Button
          className="p-2 bg-blue-500 rounded-md text-white"
          onClick={(e) => takeOrder(e, DeliveryStatus.Delivered)}
        >
          Confirm Arrival
        </Button>
      ) : (
        <Button
          className="p-2 bg-blue-500 rounded-md text-white"
          onClick={(e) => takeOrder(e, DeliveryStatus.Order)}
        >
          Take Order
        </Button>
      )}
    </>
  );
};

export default TakeOrderButton;
