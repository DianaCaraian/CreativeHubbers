import React from 'react'
import styles from "../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Box from '@material-ui/core/Box';
import dacian from '../Images/dacian.jpg'
import oliver from '../Images/oliver.png'
import nora from '../Images/nora.jpg'
import diana from '../Images/diana.jpg'
import honorius from '../Images/honorius.png'

const Team = () => {
    return <div>
      <Box className={styles.teamTitle}>
        <Typography variant="h2">
            Our hard working team
        </Typography>
      </Box>
      <Box className={styles.teamBoxes}>
        <Box className={styles.teamBox}>
          <Image 
            className={styles.teamImages}
            src = {honorius}
            alt = "Aici este un shape"
            width ="150px"
            height= "150px"
          />
           <Typography variant="h4">
            Honorius S
            </Typography>
            <Typography variant="h6">
            UI Dragon
            </Typography>
        </Box>      
        <Box className={styles.teamBox}>
          <Image 
            className={styles.teamImages}
            src = {nora}
            alt = "Aici este un shape"
            width ="150px"
            height= "150px"
          />
            <Typography variant="h4">
            Nora L
            </Typography>
            <Typography variant="h6">
            The Real MVP
            </Typography>
        </Box>
          <Box className={styles.teamBox}>
          <Image 
            className={styles.teamImages}
            src = {dacian}
            alt = "Aici este un shape"
            width ="150px"
            height= "150px"
          />
          <Typography variant="h4">
            Dacian P
          </Typography>
          <Typography variant="h6">
            Locul 1 la commit
          </Typography>
        </Box>
        <Box className={styles.teamBox}>
          <Image 
            className={styles.teamImages}
            src = {diana}
            alt = "Aici este un shape"
            width ="150px"
            height= "150px"
          />
           <Typography variant="h4">
            Diana C
            </Typography>
            <Typography variant="h6">
            Git Magician
            </Typography>
        </Box>
        <Box className={styles.teamBox}>
          <Image 
            className={styles.teamImages}
            src = {oliver}
            alt = "Aici este un shape"
            width ="150px"
            height= "150px"
          />
           <Typography variant="h4">
            Oliver C
            </Typography>
            <Typography variant="h6">
            Coffee addict
            </Typography>
        </Box>
      </Box> 
    </div>;
  };
  
  export default Team;
    