import React, { useState, useEffect } from "react";
import styles from "../../../styles/Repo.module.css";
import { CardContent, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../actions";
import TestStore from "../../../Components/TestStore";

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

  const repos = [
    {
      type: "file",
      size: 625,
      name: "octokit.rb",
      path: "lib/octokit.rb",
      sha: "fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
      url: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit.rb",
      git_url:
        "https://api.github.com/repos/octokit/octokit.rb/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
      html_url:
        "https://github.com/octokit/octokit.rb/blob/master/lib/octokit.rb",
      download_url:
        "https://raw.githubusercontent.com/octokit/octokit.rb/master/lib/octokit.rb",
      _links: {
        self: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit.rb",
        git: "https://api.github.com/repos/octokit/octokit.rb/git/blobs/fff6fe3a23bf1c8ea0692b4a883af99bee26fd3b",
        html: "https://github.com/octokit/octokit.rb/blob/master/lib/octokit.rb",
      },
    },
    {
      type: "dir",
      size: 0,
      name: "octokit",
      path: "lib/octokit",
      sha: "a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
      url: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit",
      git_url:
        "https://api.github.com/repos/octokit/octokit.rb/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
      html_url: "https://github.com/octokit/octokit.rb/tree/master/lib/octokit",
      download_url: null,
      _links: {
        self: "https://api.github.com/repos/octokit/octokit.rb/contents/lib/octokit",
        git: "https://api.github.com/repos/octokit/octokit.rb/git/trees/a84d88e7554fc1fa21bcbc4efae3c782a70d2b9d",
        html: "https://github.com/octokit/octokit.rb/tree/master/lib/octokit",
      },
    },
  ];

  const router = useRouter();

  const { userName } = router.query;
  const { repoName } = router.query;
  const [repoContent, setRepoContent] = useState([]);

  console.log("userName: ", userName);
  console.log("repoName: ", repoName);

  const dispatch = useDispatch(); //Declanseaza actiunea

  const fetchRepo = () => {
    let url = "https://api.github.com/repos/${userName}}/${repoName}/contents";
    (async () => {
      const res = await fetch(url);
      const data = await res.json();

      (() => {
        dispatch(getUsers(data));
      })();
    })();
  };

  // useEffect(() => {
  //   if (userName !== undefined) {
  //     fetch(`https://api.github.com/repos/${userName}}/${repoName}`)
  //       .then((data) => data.json())
  //       .then((res) => {
  //         setRepoContent(res.data);
  //         console.log(res);
  //       })
  //       .catch((err) => setError(err));
  //   }
  // }, [userName]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repository</h2>

      <div className={styles.content}>
        <h3 className={styles.foldername}>File Name</h3>
        <div className={styles.fileContainer}>
          {repos.map((repo) => (
            <div className={styles.fileElem} key={repo.name}>
              {repo.type === "dir" ? (
                <CardActionArea>
                  <div className={styles.folder}>
                    <FolderIcon className={styles.icon} />
                    <a href="#">
                      <Typography gutterBottom variant="h4" component="h4">
                        {repo.name}
                      </Typography>
                    </a>
                  </div>
                </CardActionArea>
              ) : (
                <div>
                  <Typography gutterBottom variant="h4" component="h4">
                    <InsertDriveFileOutlinedIcon className={styles.icon} />
                    {repo.name}
                  </Typography>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default repoName;
