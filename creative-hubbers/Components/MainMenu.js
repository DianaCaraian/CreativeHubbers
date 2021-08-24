import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
    height:100
  },
  logo:{
    fontWeight: "100",
    fontStyle:"italic",
    fontSize:35
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.logo}>
            CreativeHubbers
          </Typography>
          <Box className = {classes.menu}>
            <Typography variant="h6">
              Home
            </Typography>
            <Typography variant="h6">
              Team
            </Typography>
            <Typography variant="h6">
              Requirements
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}