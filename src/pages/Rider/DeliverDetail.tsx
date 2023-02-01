import { AccessTimeFilledOutlined, ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import TakeOrderButton from "./TakeOrderButton";

type Props = {};

const DeliverDetail = (props: Props) => {
  const navigate = useNavigate();
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
      <div className="grid grid-cols-2">
        <div className="flex flex-col text-lg">
          <h1 className="p-5 border-b-2">Delivery Number</h1>
          <h1 className="p-5 border-b-2">Delivery Status</h1>
          <h1 className="p-5 border-b-2">Delivery Address</h1>
        </div>
        <div className="flex flex-col text-lg">
          <h1 className="p-5 border-b-2">045454545</h1>
          <h1 className="p-5 border-b-2">
            <AccessTimeFilledOutlined color="secondary" /> Pending
          </h1>
          <h1 className="p-5 border-b-2">Mandalay</h1>
        </div>
      </div>
      <div className="p-5 text-xl flex justify-end">
        <TakeOrderButton />
      </div>
    </div>
  );
};

export default DeliverDetail;
