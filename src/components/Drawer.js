import * as React from "react";
import "./Drawer.css";
import Grid from "./GridLayout";
import sdCard from '../images/sd-card.png'
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, Button, Card, CardContent, CardMedia, IconButton, InputAdornment } from "@mui/material";
import soul from "../images/soul.jpeg";
import {
  AddCircleOutlined,
  AddOutlined,
  BusinessCenterOutlined,
  Search,
  Settings,
} from "@material-ui/icons";
import {
  Dashboard,
  DashboardCustomize,
  Notifications,
  Radar,
  RadarOutlined,
  SendAndArchive,
  SubjectOutlined,
} from "@mui/icons-material";
import { TextField } from "@material-ui/core";

const drawerWidth = 240;

const menuItems = [
  {
    icon: <Dashboard />,
    text: "Dashboard",
  },

  {
    icon: <Radar />,
    text: "Menu 1",
  },

  {
    icon: <AddCircleOutlined />,
    text: "Menu 2",
  },

  {
    icon: <SubjectOutlined />,
    text: "Menu 3",
  },

  {
    icon: <BusinessCenterOutlined />,
    text: "Menu 4",
  },

  {
    icon: <SendAndArchive />,
    text: "Menu 5",
  },

  {
    icon: <DashboardCustomize />,
    text: "Menu 6",
  },
];

console.log(menuItems);

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex", backgroundColor : 'black' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        style={{ backgroundColor: "#fff", color: "black" }}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar className="flex-dashboard">
          <div className="flex-dashboard-left">
          <Typography variant="h6" className="textfield-spacing">
            Dashboard
          </Typography>

          <TextField
            id="outlined-basic"
            defaultValue="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />

          <div className="cross-border">
            <AddOutlined className="grey" />
          </div>

          </div>

          <div className="flex-dashboard-right">
          <div className="grey">
            <Notifications sx={{fontSize : "40px"}}/>
          </div>

          <div className="grey">
            <Settings style={{fontSize : "40px"}}/>
          </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          backgroundColor : '#edf2f7',
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar style={{ backgroundColor: "#edf2f7" }} />
        <Toolbar 
          style={{
            backgroundColor: "#edf2f7",
            display: "flex",
            flexFlow: "column",
           
          }}
        >
          <Avatar
            src={soul}
            sx={{ height: "70px", width: "70px" }}
            className="center"
          />
          <Typography className="center-text">
            <Typography variant="h6">Prabhatsinh Rathod</Typography>
            <Typography paragraph>UI/UX Designer</Typography>
          </Typography>
          <div className="center">
            <Button
              variant="contained"
              startIcon={<RadarOutlined />}
              color="primary"
            >
              Become a Pro
            </Button>
          </div>

          <div className="center">
            <List>
              {menuItems.map((menu) => (
                <ListItem button key={menu.text}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <ListItemText primary={menu.text} />
                </ListItem>
              ))}
            </List>
            <Card sx={{backgroundColor : 'white', marginTop : 10}}>

          <CardMedia
          component="img"
          height="100%"
          alt="storage"
          image = {sdCard}
        /> 
          
            <CardContent style={{textAlign : 'center', }}>
              <Typography variant="h6" sx={{fontSize : "16px", fontWeight : 'bold', marginBottom : 1, marginTop : -2}}>
                Buy More Storage
              </Typography>

              <Button button variant="contained">Buy Now</Button>
            </CardContent>
          </Card>
          </div>

          <List>
              
                <ListItem button >
                  <ListItemIcon><Dashboard /></ListItemIcon>
                  <ListItemText primary= "Menu 7" />
                </ListItem>
            </List>
        </Toolbar>
        
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Grid />
      </Box>
    </Box>
  );
}
