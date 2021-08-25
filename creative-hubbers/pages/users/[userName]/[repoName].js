import React, { useState, useEffect } from "react";
import styles from "../../../styles/Repo.module.css";
import { CardContent, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../../actions";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "30px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "25%",
    height: "100%",
  },
}));

const repoName = () => {
  const classes = useStyles();
  const [repoDetails, setRepoDetails] = useState({});

  const router = useRouter();

  const { userName } = router.query;
  const { repoName } = router.query;

  console.log("userName: ", userName);
  console.log("repoName: ", repoName);

  const dispatch = useDispatch(); //Declanseaza actiunea

  // const fetchRepo = () => {
  //   let url =
  //     "https://api.github.com/repos/" + userName + "/" + repoName + "/contents";
  //   (async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     console.log("data: ", data);
  //     console.log("url: ", url);

  //     dispatch(getRepos(data));
  //   })();
  // };

  // fetchRepo();

  useEffect(() => {
    if (userName !== undefined) {
      fetch("https://api.github.com/repos/" + userName + "/" + repoName)
        .then((data) => data.json())
        .then((res) => {
          setRepoDetails(res);
        })
        .catch((err) => console.log(err));
    }
  }, [userName]);

  const repos = useSelector((state) => state.user.repos);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repository</h2>

      {repoDetails.language !== undefined ? (
        <div className={styles.language}>
          Language: <i>{repoDetails.language}</i>
        </div>
      ) : (
        <div></div>
      )}

      <button
        onClick={() => {
          let url =
            "https://api.github.com/repos/" +
            userName +
            "/" +
            repoName +
            "/contents";
          (async () => {
            const res = await fetch(url);
            const data = await res.json();

            console.log("data: ", data);
            console.log("url: ", url);

            dispatch(getRepos(data));
          })();
        }}
      >
        APASA
      </button>
      {console.log("repo: ", repos)}

      <div className={styles.content}>
        <h3 className={styles.foldername}>{repoName}</h3>
        <div className={styles.fileContainer}>
          {repos !== undefined ? (
            repos.map((repo) => (
              <div key={repo.name}>
                {repo.type === "dir" ? (
                  <Link
                    className="btn btn-primary link"
                    className={styles.fileElem}
                  >
                    <CardActionArea
                      onClick={() => {
                        fetchRepo(repo.name);
                      }}
                    >
                      <div className={styles.folder}>
                        <FolderIcon className={styles.icon} />
                        <Typography gutterBottom variant="h4" component="h4">
                          {repo.name}
                        </Typography>
                      </div>
                    </CardActionArea>
                  </Link>
                ) : (
                  <div>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      className={styles.fileElem}
                    >
                      <div>
                        <InsertDriveFileOutlinedIcon className={styles.icon} />
                      </div>
                      <div
                        onClick={() => console.log("Apasa pe buton")}
                        className={styles.fileBtn}
                      >
                        {repo.name}
                      </div>
                    </Typography>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default repoName;
