import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/facebook/repos`)
  const repos = await res.json()

  // Pass data to the page via props
  return { props: { repos } }
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 350,
  },
  cards: {
    maxWidth: 800,
  },
}));

export default function Home({repos}) {
      const classes = useStyles();
        const router = useRouter()
        const {userName} = router.query;
  return (

 <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={3} >
          <Paper className={classes.paper}>               
                    <CardMedia
                        component='img'
                        className={classes.media}
                        src='https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h3">
                            
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h5">
                            {userName}   
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna et urna, nulla quis nisi ac. Accumsan ut ut amet consequat sit sed accumsan mi.
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
                {repos.map(
                  (repo) =>
                    <div className={classes.cards}>
                <CardActionArea>
                     <CardContent>
                         <Typography gutterBottom variant="h5" component="h5">
                            {repo.name}
                         </Typography>
                         <Typography variant="body2" color="textSecondary" component="p">
                             {repo.description}
                         </Typography>
                         <Typography gutterBottom variant="h6" component="h6">
                            {repo.language}
                         </Typography>
                     </CardContent>
                </CardActionArea>    
               
                </div>

                )}
                
                <Button variant="outlined" color="primary" onClick={() => requestUserRepos('OliverCosma')}>Buton</Button>                
        </Grid>
    </Grid>
 </div>
  );
}
