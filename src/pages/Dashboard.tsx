
import { Box, Grid } from "@mui/material";
import Content from "../components/Content";
import "../styles/MenuItem.css";
import DashboardNav from "../components/Dashboard/DashboardNav";

import SidebarNav from "../components/Dashboard/SidebarNav";
type Props = {
  role: String;
};
function Dashboard(props: Props) {
  const { role } = props;
  return (
    
      <div >
        <Grid container>
      <Grid item lg={0.4} md={0.5} sm={0.8} xs={1.2} >
        
        <SidebarNav role={role} />
     
       
      </Grid>
      <Grid item lg={11.6} md={11.5} sm={11.2}  xs={10.8} className="">
          <DashboardNav role={role} />
       <Content />
      
      </Grid>
      
    </Grid>
{/* <Footer /> */}
      </div>
  );
}

export default Dashboard;
