import { Outlet } from "react-router-dom";

type Props = {};

const Deliveries = (props: Props) => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold text-green-400 text-center">
        Meal Delivery
      </h1>
      <Outlet />
    </div>
  );
};

export default Deliveries;
