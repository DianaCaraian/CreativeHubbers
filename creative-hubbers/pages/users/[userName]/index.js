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
        const router = useRouter();
        const {userName} = router.query;
  async function getServerSideProps(userName) {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/${userName}/repos`)
  const repos = await res.json()
  return repos
  
  // Pass data to the page via props
   }
   getServerSideProps(userName);
   console.log(repos)
  
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
               <ul id='userRepos'>Lista repos</ul>
                
                <Button variant="outlined" color="primary" onClick={() => {
                  let url = `https://api.github.com/users/${userName}/repos`;
                  
                  (async () => {
                     const res = await fetch(url)
                     const repos = await res.json();
                     
                    for (let i in repos)
                    {
                                  let ul = document.getElementById('userRepos');
                                  let li = document.createElement('li');
                                  li.innerHTML = (`
                                  <p>Repo: ${repos[i].name}</p>
                                  <p>Description: ${repos[i].description}</p>
                                  <p>language: ${repos[i].language}</p>`)
                                  ul.appendChild(li);

                    }
                })();
              }}>
                  
                  Buton</Button>                
        </Grid>
    </Grid>
 </div>
 );
}
