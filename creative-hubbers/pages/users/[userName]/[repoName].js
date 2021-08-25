import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Repo.module.css';
import { CardContent, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../../../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '30px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '25%',
    height: '100%',
  },
}));

const repoName = () => {
  const classes = useStyles();

  const router = useRouter();
  const dispatch = useDispatch(); //Declanseaza actiunea

  const { userName } = router.query;
  const { repoName } = router.query;

  console.log('userName: ', userName);
  console.log('repoName: ', repoName);

  const fetchRepo = (additionalDirs = '') => {
    if (userName && repoName) {
      let dir;

      if (additionalDirs) {
        dir = '/' + additionalDirs;
      } else {
        dir = '';
      }
      let url =
        'https://api.github.com/repos/' +
        userName +
        '/' +
        repoName +
        '/contents' +
        dir;
      (async () => {
        const res = await fetch(url);
        const data = await res.json();

        console.log('data: ', data);
        console.log('url: ', url);

        dispatch(getRepos(data));
      })();
    }
  };
  useEffect(fetchRepo, [router.isReady]);

  // fetchRepo(userName, repoName);
  const repos = useSelector((state) => state.user.repos);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repository</h2>

      {console.log('repo: ', repos)}

      <div className={styles.content}>
        <h3 className={styles.foldername}>{repoName}</h3>
        <div className={styles.fileContainer}>
          {repos.length !== 0 ? (
            repos.map((repo) => (
              <div className={styles.fileElem} key={repo.name}>
                {repo.type === 'dir' ? (
                  <CardActionArea
                    onClick={() => {
                      fetchRepo(repo.name);
                    }}
                  >
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
