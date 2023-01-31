
import { Box, Grid } from "@mui/material";
import Content from "../../components/Content";
import SidebarNav from "../../components/Partner/SidebarNav";
import "../../styles/MenuItem.css";
import DashboardNav from "../../components/Partner/DashboardNav";

function Dashboard() {
  
  return (
    
      <div >
        <Grid container>
      <Grid item lg={0.5} md={0.8} sm={1} xs={1.3}>
        <Box >
        <SidebarNav />
        </Box>
      </Grid>
      <Grid item lg={11.5} md={11.2} sm={11}  xs={10.7}>
        <Box >  <DashboardNav/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam praesentium ut, molestias non impedit ducimus at dolorem cum optio minima placeat magni maxime sapiente aperiam, quisquam ipsam. Incidunt nostrum voluptate reiciendis fugiat ex in dignissimos rerum asperiores minus necessitatibus quasi, eligendi facilis voluptatum! Quos veritatis sed, provident in eveniet dolores!
      </Box>
      </Grid>
      
    </Grid>

      </div>
  );
}

export default Dashboard;
