import React from 'react'
import Box from "@material-ui/core/Box"
import  Typography  from '@material-ui/core/Typography'
import styles from "../styles/Home.module.css"

const Tasks = () => {
    return <div>
        <Box className= {styles.taskBox}>
            <Typography variant="h4" className={styles.taskTitle}>
                Create a simple Github UI app which can:
            </Typography>
                <Typography variant ="p" className={styles.taskText}>
                Uses Github's open API ,let's you enter a github username
                    , based on that username shows a list of available repositories
                    , the list can be filtered via a search input
                    , when clicking a repository name you can view the root files and folders along side the programming languages used in that repo
                    , if the page is refreshed, data should be persisted                  
                </Typography>
            <Typography variant="h4" className={styles.taskTitle}>
                Technical requirements:
            </Typography>
                <Typography variant="p" className={styles.taskText}>
                Use a UI framework (Material UI)
                ,use a state management library (your own, somebody elses, open source) that supports persistance
                , use React
                , write some unit tests
                , write some end to end tests
                </Typography>
            <Typography variant="h4" className={styles.taskTitle}>
                Agile requirements
            </Typography>
                <Typography variant="p" className={styles.taskText}>
                Work in teams
                , daily standups with your team
                , have a day for planning
                , create a Github account and a github repo for the proejct
                , use Github issues to create tickets and asign them to the person who will work on them
                Mentors can join the standup randomly.
                </Typography>
        </Box>
    </div>
}



export default Tasks