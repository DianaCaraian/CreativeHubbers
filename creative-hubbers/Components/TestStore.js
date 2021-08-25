//we can delete this afterwards, it is just to test the state manager

import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '0 auto',
    height: '500px',
    width: '1000px',
    alignItems: 'center',
    boxShadow: 'inset 0 0 10px #000000'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '25%',
    height: '100%',
  },
  subt: {
    marginBottom: '10px'
  },
  mareDiv: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(197, 37%, 64%)'
  },
}));

const TestStore = () => {

  const classes = useStyles();
  const users = useSelector((state) => state.user.users); //un fel de subscribe la change
  console.log('users: ', users);
  return (
    <>
      <Typography variant='h6'>{users.login}</Typography>
      <div className = {classes.mareDiv}>
      <Grid container className = {classes.gridC}>
      <Card className={classes.root}>
          <CardMedia
        className={classes.cover}
        image={users.avatar_url}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
            {users.login}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {users.public_repos} repos - {users.location}
          </Typography>
          <Typography component="h6" className={classes.subt}>
           {users.bio}
          </Typography>
          <Link href={`http://localhost:3000/users/${users.login}`}>
          <Button variant="contained" color="primary">See Repos</Button>
          </Link>
        </CardContent>
      </div>     
    </Card>


    </Grid>
    </div>

    </>
  );
};

export default TestStore;
