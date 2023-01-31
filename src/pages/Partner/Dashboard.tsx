
import { Box, Grid } from "@mui/material";
import Content from "../../components/Content";
import "../../styles/MenuItem.css";
import DashboardNav from "../../components/Dashboard/DashboardNav";
import Home from "../publicUser/PublicUser";
import Footer from "../../components/Layout/Footer/Footer";
import SidebarNav from "../../components/Dashboard/SidebarNav";

function Dashboard() {
  
  return (
    
      <div >
        <Grid container>
      <Grid item lg={0.4} md={0.7} sm={0.8} xs={1.2}>
        
        <SidebarNav />
       
      </Grid>
      <Grid item lg={11.6} md={11.3} sm={11.2}  xs={10.8}>
          <DashboardNav/>
       <Content />
      
      </Grid>
      
    </Grid>
{/* <Footer /> */}
      </div>
  );
}

export default Dashboard;
