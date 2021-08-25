import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  menu:{
    position: "absolute",
    right: 0,
    display: "flex",
    justifyContent: "space-around",
    width:"33%",
    maxWidth: 600,
    minWidth:300
  },
  navbar:{
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    height:100,
    zIndex: 100,
    width:"100%",
    position:"fixed",
    color:"white"

  },
  logo:{
    position:"absolute",
    left:0,
    fontWeight: "100",
    fontStyle:"italic",
    fontSize:35,
    left:20
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>  
          <Typography className={classes.logo}>
            CreativeHubbers
          </Typography>
          
          <Box className = {classes.menu}>
            <Typography>
            <a href ={'http://localhost:3000'}>Home</a>
            </Typography>   
            <Typography>
              <a href ="#">Team</a>
            </Typography>
            <Typography>
              <a href="#">Requirements</a>
            </Typography>
          </Box>
    </div>
  );
}