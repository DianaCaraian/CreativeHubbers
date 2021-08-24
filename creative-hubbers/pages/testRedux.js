import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { request } from '@octokit/request';
import { getUsers } from '../actions';
import TestStore from '../Components/TestStore';

export default function TestRedux() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  // const users = useSelector((state) => state);

  const handleSearch = () => {};
  return (
    <>
      <Typography variant='h1'>Hello</Typography>
      <input
        type='text'
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
      />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          let url = 'https://api.github.com/users/' + name;
          (async () => {
            const res = await fetch(url);
            const data = await res.json();

            (() => {
              dispatch(getUsers(data));
            })();
          })();
        }}>
        Search
      </Button>
      <TestStore />
    </>
  );
}
