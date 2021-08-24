import React from "react";
import styles from "../../../styles/Repo.module.css";

const repoName = () => {
  return (
    <div>
      <h2>Repository</h2>

      <div className={styles.content}>
        <h3 className={styles.foldername}>File Name</h3>
        <div>
          <h4>File Name</h4>
          <h4>File Name</h4>
          <h4>File Name</h4>
        </div>
      </div>
    </div>
  );
};

export default repoName;
