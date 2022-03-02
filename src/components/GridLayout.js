// import React from 'react'
import "./GridLayout.css";

import Chart from './Chart'
import { CartesianGrid } from "recharts";
import bike from '../images/bike-man.png'
import {Avatar, Button} from "@mui/material";
import RefreshOutlined from "@material-ui/icons/RefreshOutlined"
import mario from '../images/m.jpg';
import luigi from '../images/lg.jpg';
import sonic from '../images/sonic.jpeg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material'
import Typography from "@mui/material/Typography";
import Calendar from "./Calendar";
import { AddOutlined, PhoneOutlined } from "@material-ui/icons";


const tasks = [
  {
    icon : <RefreshOutlined />,
    heading : 'Task Remaining',
    grade : '12/15',
    color : 'orange'

},
  {
    icon : <RefreshOutlined />,
  heading : 'Task Left',
  grade : '12/15',
  color: 'green'
},

{
icon : <RefreshOutlined />,
heading : 'Tasks Done',
grade : '12/15',
color: 'pink'
}
]

export default function GridLayout() {
  return (
    <Grid container spacing={3}>
          <Grid item xs={6} md={8}>
            <div className='flex-grid'>
               <div>
                <Typography variant='h6'>
                  Ongoing Projects
                </Typography>
              </div>  

              <div className='flex-grid-right'>
              <Typography paragraph>
                  Remaining
                </Typography>

                <Typography paragraph
                variant='body2'
                px={5}
                color = 'primary'
                >
                  Ongoing
                </Typography>

                <Typography paragraph>
                  Completed
                </Typography>
              </div>
            </div>    
          </Grid>
          <Grid item xs={6} md={4}>

          <Card sx={{ maxWidth: 345, borderRadius : 5 }}>
      <CardActionArea sx={{display: 'flex', backgroundColor : '#43A6C6'}}>
        <CardMedia
          component="img"
          height="140"
          alt="delivery bike"
          image = {bike}
        />
        <CardContent sx={{color: 'white'}}>
          <Typography gutterBottom variant="h6" component="div">
            Try Pro Version
          </Typography>
          <Typography variant="body2">
            Unlock full power of calendar for two weeks for free          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </Grid>
          <Grid item xs={6} md={8} style={{marginTop: -100}}>

          <Card sx={{backgroundColor : '#edf2f7', position: 'relative', borderRadius : 7}}  elevation={0}>
             
              <CardContent>
                <div className="flex-boxed-color">
                <div className="thick-boxed-color">
                </div>
                <div className="boxed-color">
                <Typography variant='h6'
                button
                color = 'white'
                mx={3}
                >
                    App Design
                  </Typography>

                  <Typography paragraph
                              button
                color = 'white'
                mx={3}
                
                >
                    17, August 2001
                  </Typography>
                  
                </div>
                </div>
              </CardContent>

              <CardContent sx={{marginLeft: 5}}>
                <div className="flex-boxed-color">
                <div className="thick-boxed-color-red">
                </div>
                <div className="boxed-color-red">
                <Typography variant='h6'
                button
                color = 'white'
                mx={3}
                >
                    App Design
                  </Typography>

                  <Typography paragraph
                              button
                color = 'white'
                mx={3}
                
                >
                    17, August 2001
                  </Typography>
                  
                </div>
                </div>
              </CardContent>

              <CardContent>
                <div className="flex-boxed-color">
                <div className="thick-boxed-color-yellow">
                </div>
                <div className="boxed-color-yellow">
                <Typography variant='h6'
                button
                color = 'white'
                mx={3}
                >
                    App Design
                  </Typography>

                  <Typography paragraph
                              button
                color = 'white'
                mx={3}
                
                >
                    17, August 2001
                  </Typography>
                  
                </div>
                </div>
              </CardContent>

              <CardContent className="toon-container flex">
                <Avatar src={mario}/>
                <Avatar src={luigi}/>
                <Avatar src={sonic}/>
              </CardContent>

              <CardContent sx={{textAlign : 'center', color: 'white'}}>
                 <div className="flex-boxed-color progress-bar">
                 <div className="purple-progress-bar"></div>
                  <div className="black-progress-bar center-content"><p>80%</p></div>
                 </div>
                               
              </CardContent>

              <CardContent sx={{color: 'grey'}}>
                <div className="flexxx">
                <div className="todo-flex">
                <div className="todo"></div>
                <Typography paragraph sx={{marginLeft : 2}}>
                    Todo
                </Typography>
                  </div>

                  <div className="todo-flex">
                <div className="inprogress"></div>
                <Typography paragraph sx={{marginLeft : 2}}>
                    Inprogress
                </Typography>
                  </div>

                  <div className="todo-flex">
                <div className="completed"></div>
                <Typography paragraph sx={{marginLeft : 2}}>
                    Completed
                </Typography>
                  </div>
                </div>

              </CardContent>
              
          </Card>
          </Grid>
          <Grid item xs={6} md={4}>
            <Card sx={{backgroundColor: '#edf2f7', textAlign:'center'}} elevation={0}>
              <CardContent sx={{marginLeft : 'auto', marginRight : 'auto'}}>
              <Calendar />
              </CardContent>
          </Card>
          </Grid>

          <Grid item xs={6} md={8}>
             
            <div className="task-flex">
              {tasks.map(task => (
                <div className="flex-task">
                <RefreshOutlined style = {{fontSize : "70px", color: task.color }}/>
                <div>
                <Typography variant="h6">
                    {task.heading}
                </Typography>

                <Typography variant="h6">
                    {task.grade}
                </Typography>
                </div>
              </div>
              ))}
              </div> 
          </Grid>

          <Grid item xs={6} md={4}>
          <Card sx={{backgroundColor: '#edf2f7', borderRadius : 5}} elevation={0}>
            <div className="flex-project">               
               <CardContent>
                  <Typography paragraph>
                    Project Manager
                  </Typography>
                  <Typography variant="h4">
                    Client meeting
                  </Typography>
                </CardContent>

                <CardContent sx={{display: 'flex'}}>
                  <AddOutlined/>
                  <Typography>
                    New
                  </Typography>
                </CardContent>
             </div>

                <CardContent sx={{textAlign: 'center', position : 'relative'}}>
                  <div className="flex-project-button">
                  <Button sx={{backgroundColor : '#cbd5e0', position: 'relative', color : 'black', borderRadius : 5, width: "300px", height: "50px"}}
                 button
                 variant="contained"  >
                  Swipe to call
                  <div className="white-button-icon"><PhoneOutlined /></div>

                </Button>
                  </div>
                
                </CardContent>
          </Card>
          </Grid>

          <Grid item xs={6} md={8} style={{marginTop: -100}}>
            <div className="chart-flex" >
            <Typography variant="h5">
              Progress Stats
            </Typography>
            <div className="chart-flex-right">
            <Typography paragraph>
              day
            </Typography>
            <Typography paragraph>
              week
            </Typography>
            <Typography variant="h6">
              months
            </Typography>
            </div>
            </div>
          <Chart />
          </Grid>

          <Grid item xs={6} md={4}>
          <Typography paragraph>
                  Hello
                </Typography>
          </Grid>
            
        </Grid>
  )
}
