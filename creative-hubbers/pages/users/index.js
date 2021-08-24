import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '20px 20px'
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
}));


export default function Home() {
  const classes = useStyles();

  return (
    

    <Grid container>
       <Card className={classes.root}>
          <CardMedia
        className={classes.cover}
        image='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            The user s name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            No. of repos
          </Typography>
          <Typography component="h6">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, incidunt quisquam animi recusandae cupiditate dolores earum sit excepturi ipsa suscipit culpa voluptates, esse dicta provident maxime id ullam, omnis corrupti! Necessitatibus autem corporis voluptatem dolorum explicabo? Dolorem ipsam dolorum dolor facilis cum maxime delectus nostrum qui distinctio! Ipsum facere quae quam voluptatem, eos consequatur ex error dignissimos vero, 
          </Typography>
        </CardContent>
      </div>     
    </Card>
       <Card className={classes.root}>
          <CardMedia
        className={classes.cover}
        image='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            The user s name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            No. of repos
          </Typography>
          <Typography component="h6">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, incidunt quisquam animi recusandae cupiditate dolores earum sit excepturi ipsa suscipit culpa voluptates, esse dicta provident maxime id ullam, omnis corrupti! Necessitatibus autem corporis voluptatem dolorum explicabo? Dolorem ipsam dolorum dolor facilis cum maxime delectus nostrum qui distinctio! Ipsum facere quae quam voluptatem, eos consequatur ex error dignissimos vero, 
          </Typography>
        </CardContent>
      </div>     
    </Card>
       <Card className={classes.root}>
          <CardMedia
        className={classes.cover}
        image='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            The user s name
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            No. of repos
          </Typography>
          <Typography component="h6">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, incidunt quisquam animi recusandae cupiditate dolores earum sit excepturi ipsa suscipit culpa voluptates, esse dicta provident maxime id ullam, omnis corrupti! Necessitatibus autem corporis voluptatem dolorum explicabo? Dolorem ipsam dolorum dolor facilis cum maxime delectus nostrum qui distinctio! Ipsum facere quae quam voluptatem, eos consequatur ex error dignissimos vero, 
          </Typography>
        </CardContent>
      </div>     
    </Card> 
    </Grid>
  );
}
