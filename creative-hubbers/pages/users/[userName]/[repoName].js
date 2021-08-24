import React from "react";
import styles from "../../../styles/Repo.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

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
    height: 300,
  },
  cards: {
    maxWidth: 450,
  },
  typography: {},
}));

const repoName = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repository</h2>

      <div className={styles.content}>
        <h3 className={styles.foldername}>File Name</h3>
        <div className={styles.filename}>
          <Typography gutterBottom variant="h4" component="h4">
            File Name
          </Typography>
          <Typography gutterBottom variant="h4" component="h4">
            File Name
          </Typography>
          <Typography gutterBottom variant="h4" component="h4">
            File Name
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default repoName;
