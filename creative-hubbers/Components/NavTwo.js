import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from "../styles/Home.module.css";
import leftHeroBranchesImage from '../Images/heroImage.png'
import heroAStrouantImage from '../Images/astro.png'
import Image from "next/image";


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

export default function NavTwo() {
  const classes = useStyles();

  return (
    <>
    <Box className={styles.heroStyles}>  
              
          <Box className={styles.heroBranchesImage}>
            <Image 
              className={styles.left}
              src = {leftHeroBranchesImage}
              alt = "Aici este un shape"
              width ="100px"
              height= "400px"
            />
          </Box>
          <Box className={styles.heroAStrouantImage}>
            <Image 
              className={styles.left}
              src = {heroAStrouantImage}
              alt = "Aici este un shape"
              width ="200px"
              height= "200px"
            />
          </Box>
      </Box>
    <div className={classes.navbar}>  
          <Typography className={classes.logo}>
            CreativeHubbers
          </Typography>
          
          <Box className = {classes.menu}>
            <Typography>
            <a href ={'../Tasks'}>Home</a>
            </Typography>   
          </Box>
    </div>
    </>
  );
}