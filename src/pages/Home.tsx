import React, { useEffect } from "react";
import Navbar from "../components/Layout/Navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";
type Props = {
  role: String;
};
function Home(props: Props) {
  const { role } = props;
  const navigate = useNavigate();
  const token: any = localStorage.getItem("token");
  useEffect(() => {
    if (role.length > 0 && token.length > 0) {
      navigate(`/${role.toLowerCase()}`, { replace: true });
    }
  }, []);

  return (
    <div>
      <Navbar role={role} />
      <div>
        <Content />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
