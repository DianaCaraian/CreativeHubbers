import React from 'react'
import  Typography  from '@material-ui/core/Typography'
import Box from "@material-ui/core/Box"
import styles from "../styles/Home.module.css"
import Link from 'next/link'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button"

const HeroContent = () => {
    return <div>
        <Box className = {styles.heroBoxes}>
            <Typography variant="h1" >
                W E L C O M E
            </Typography>
            <Typography variant="h3">
                to a new experience of git
            </Typography>
            <form className={styles.root} noValidate autoComplete="off">   
                <TextField id="outlined-basic" variant="outlined" />
            </form>
            <Button variant="contained">           
                Search by name        
            </Button>  
        </Box>
       

        
        
    </div>
}



export default HeroContent