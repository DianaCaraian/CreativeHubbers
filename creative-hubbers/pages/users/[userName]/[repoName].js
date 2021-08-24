import React from "react";
import styles from "../../../styles/Repo.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const repoName = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repository</h2>

      <div className={styles.content}>
        <h3 className={styles.foldername}>File Name</h3>
        <div className={styles.fileContainer}>
          <div className={styles.fileElem}>
            <FolderIcon className={styles.icon} />
            <Typography gutterBottom variant="h4" component="h4">
              File Name
            </Typography>
          </div>
          <div className={styles.fileElem}>
            <FolderIcon className={styles.icon} />
            <Typography gutterBottom variant="h4" component="h4">
              File Name
            </Typography>
          </div>
          <div className={styles.fileElem}>
            <FolderIcon className={styles.icon} />
            <Typography gutterBottom variant="h4" component="h4">
              File Name
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default repoName;
