import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getRoles } from "../../services/AuthService";

type Props = {
  auth: any;
};
const OAuthRedirect = (props: Props) => {
  const { auth } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("error")) {
      setError(JSON.stringify(searchParams.get("error")));
      console.log(searchParams.get("error"));
    }
    let oAuthtoken = searchParams.get("token");
    if (oAuthtoken) {
      oAuthtoken = oAuthtoken.replace("#_=_", "");
      localStorage.setItem("token", oAuthtoken);
      getRoles(oAuthtoken).then((res) => {
        const auths: any = [];
        res.data.roleResponses.forEach((role: string) => {
          auths.push(role.replace("ROLE_", ""));
        });
        auth({
          role: auths,
        });
        localStorage.setItem("authorization", JSON.stringify(auths));
        navigate(`/${auths[0].toLowerCase()}/edit-pro`, { replace: true });
      });
      setToken(oAuthtoken);
    }
  }, []);

  if (error) {
    navigate("/login?oauthError=" + error);
  }

  return <></>;
};

export default OAuthRedirect;
