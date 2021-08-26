import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Repo.module.css';
import { CardContent, Typography } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContent,
  getRepoDetails,
  getLanguages,
  setPath,
} from '../../../actions';
import { Link } from '@material-ui/core';

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
  const router = useRouter();
  const dispatch = useDispatch(); //Declanseaza actiunea

  const { userName } = router.query;
  const { repoName } = router.query;
  let path = useSelector((state) => state.user.path);
  console.log('path ', path);
  if (userName && repoName && !path) {
    dispatch(setPath(userName + '/' + repoName + '/contents'));
  } else {
    dispatch(setPath(path));
  }

  const fetchContent = (newpath) => {
    if (userName && repoName) {
      let url = '';
      if (newpath) {
        url = 'https://api.github.com/repos/' + path + '/' + newpath;

        dispatch(setPath(path + '/' + newpath));
      } else {
        url = 'https://api.github.com/repos/' + path;
      }
      (async () => {
        const res = await fetch(url);
        const data = await res.json();

        dispatch(getContent(data));
      })();
    }
  };
  const fetchRepoDet = () => {
    if (userName && repoName) {
      (async () => {
        const res = await fetch(
          'https://api.github.com/repos/' + userName + '/' + repoName
        );
        const data = await res.json();

        dispatch(getRepoDetails(data));
      })();
      (async () => {
        const res = await fetch(
          'https://api.github.com/repos/' +
            userName +
            '/' +
            repoName +
            '/languages'
        );
        const data = await res.json();

        dispatch(getLanguages(data));
      })();
    }
  };
  useEffect(() => {
    fetchContent('');
    fetchRepoDet();
  }, [router.isReady]);
  const sumValues = (obj) => {
    let total = 0;
    for (let value in obj) {
      total += obj[value];
    }
    return total;
  };
  const repos = useSelector((state) => state.user.content);
  const repoDetails = useSelector((state) => state.user.repo);
  const repoLanguages = useSelector((state) => state.user.languages);
  const sumLanguages = sumValues(repoLanguages);

  return (
    <div className={styles.container}>
      <Link href={'/users/' + userName}>
        <h2 className={styles.title}>Repository</h2>
      </Link>
      {repoDetails.language !== undefined ? (
        <div className={styles.language}>
          {Object.entries(repoLanguages).map(([key, lang], i) => (
            <div style={{ width: (lang / sumLanguages) * 100 + '%' }}>
              {key}
              <div
                key={i}
                style={{
                  backgroundColor:
                    '#' + Math.floor(Math.random() * 16777215).toString(16),
                  height: 20,
                  marginTop: 10,
                }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.content}>
        <Link href={'/users/' + userName + '/' + repoName}>
          <h3 className={styles.foldername}>{repoName}</h3>
        </Link>
        <div className={styles.fileContainer}>
          {repos.length !== 0 ? (
            repos.map((repo) => (
              <div key={repo.name}>
                {repo.type === 'dir' ? (
                  <Link className="btn btn-primary" className={styles.fileElem}>
                    <CardActionArea
                      onClick={(event) => {
                        event.preventDefault();
                        fetchContent(repo.name);
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
                  </Link>
                ) : (
                  <div>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h4"
                      className={styles.fileElem}
                    >
                      <InsertDriveFileOutlinedIcon className={styles.icon} />
                      <div
                        onClick={() => console.log('Apasa pe buton')}
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
