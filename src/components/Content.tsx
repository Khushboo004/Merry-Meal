import { Outlet } from "react-router-dom";

type Props = {};

const Content = (props: Props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Content;
