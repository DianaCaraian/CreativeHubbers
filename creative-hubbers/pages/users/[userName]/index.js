import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Card } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    width: '60%',
    height: '575px',
    backgroundColor: 'white',
    position: 'relative',
    margin: '0 auto',
    top: '175px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRight: '4px solid transparent',
    height: '100% ',
  },
  media: {
    height: 360,
  },
  cards: {
    height: '200px',
  },
  bckCol: {
    backgroundColor: 'white',
  },
  typoBorder: {
    width: '175px',
    borderBottom: '1px solid black',
  },
}));

export default function Users({ repos }) {
  const classes = useStyles();
  const users = useSelector((state) => state.user.users);
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item xs={3}>
          <Card className={classes.paper}>
            <CardMedia
              component="img"
              className={classes.media}
              src={users.avatar_url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h3" component="h3"></Typography>
              <Typography gutterBottom variant="h5" component="h5">
                {users.login}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {users.bio}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={8} className={classes.bckCol}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="h2"
              className={classes.typoBorder}
            >
              Repositories
            </Typography>
          </CardContent>
          <GridList
            style={{ height: 500, width: 866, overflow: 'auto' }}
            spacing="5"
            cols="2"
          >
            {repos.map((repo) => (
              <div className={classes.cards}>
                <CardActionArea href={router.asPath + '/' + repo.name}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                      Repo name: {repo.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Description: {repo.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      Language: {repo.language}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { userName } = context.query;
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/${userName}/repos`);
  const repos = await res.json();
  // Pass data to the page via props
  return { props: { repos } };
}
