import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { GridList } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 460,
  },
  cards: {
    height:240,
    width: 600,
  },
}));

export default function Users({repos}) {
        const classes = useStyles();
        const users = useSelector((state) => state.user.users);

  return (

 <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={4} >
          <Paper className={classes.paper}>               
                    <CardMedia
                        component='img'
                        className={classes.media}
                        src={users.avatar_url}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h3"> 
                        {users.login}        
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5">
                        {users.location}                
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {users.bio}                      
                        </Typography>
                    </CardContent>
            </Paper> 
        </Grid>
        <Grid item xs={8}>
               <CardContent>
               <Typography gutterBottom variant="h2" component="h2">
                     Repositories
               </Typography>
               </CardContent>
               <GridList style = {{maxHeight:600, maxWidth:1000, overflow:'auto'}} spacing="5" cols='2'>
                {repos.map(
                  (repo) =>
                    <div className={classes.cards}>
                <CardActionArea>
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="h5">
                            Repo name: {repo.name}
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             Description: {repo.description}
                         </Typography>
                         <Typography gutterBottom variant="h6" component="h6">
                            Language:   {repo.language}
                         </Typography>
                     </CardContent>
                </CardActionArea>     
                </div>

                )}
                </GridList>
                
        </Grid>
    </Grid>
 </div>
  );  
}
export async function getServerSideProps(context) {
  const {userName} = context.query;
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/${userName}/repos`)
  const repos = await res.json()
  // Pass data to the page via props
  return {props: {repos}}
}
