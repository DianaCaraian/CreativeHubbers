import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box } from "@material-ui/core";
import MainMenu from './MainMenu';
import leftHeroBranchesImage from '../Images/heroImage.png'
import heroAStrouantImage from '../Images/astro.png'
// import HeroContent from '../Components/HeroContent'
// import Team from '../Components/Team'
// import TheTasks from '../Components/TheTasks'
     
const MainPage = () =>{
  return <div>
       <Box className={styles.heroStyle}>
          <MainMenu />
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
      {/* <Box className={styles.HeroContent}>
          <HeroContent />
      </Box>
      <Box className={styles.HeroContent}>
          <Team />
      </Box>
      <Box className={`${styles.HeroContent} ${styles.HeroContentTasks}`} >
          <TheTasks />
      </Box> */}
  </div>
}
    
export default MainPage