import { AccessTimeFilledOutlined, ArrowBackIosNew } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getSingleDeli } from "../../services/Delivery";
import TakeOrderButton from "./TakeOrderButton";
import DeliveryStatus from "../../Utils/DeliStatus";

type Props = {};

const DeliverDetail = (props: Props) => {
  const { deliId } = useParams();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState<any>();
  const token = localStorage.getItem("token");
  useEffect(() => {
    getSingleDeli(token, deliId)
      .then((res) => {
        setDelivery(res.data);
      })
      .catch((error) => {
        toast.error("Error while fetching, please retry later");
        console.log(error);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="p-5">
        <button className="flex space-x-3" onClick={() => navigate(-1)}>
          <ArrowBackIosNew fontSize="small" />
          <h1 className="hover:border-b-2 border-green-400">
            Back To Delivery Lists
          </h1>
        </button>
      </div>
      {delivery != undefined ? (
        <>
          <div className="grid grid-cols-2">
            <div className="flex flex-col text-lg">
              <h1 className="p-5 border-b-2">Delivery Number</h1>
              <h1 className="p-5 border-b-2">Delivery Status</h1>
              <h1 className="p-5 border-b-2">Delivery Address</h1>
            </div>
            <div className="flex flex-col text-lg">
              <h1 className="p-5 border-b-2">{delivery.delivery_number}</h1>
              <h1 className="p-5 border-b-2"> {delivery.status}</h1>
              <h1 className="p-5 border-b-2">{delivery.delivery_address}</h1>
            </div>
          </div>
          {delivery.status === DeliveryStatus.Order ? (
            <></>
          ) : delivery.status === DeliveryStatus.Delivered ? (
            <></>
          ) : (
            <TakeOrderButton
              deliId={delivery.delivery_id}
              status={delivery?.status}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DeliverDetail;
