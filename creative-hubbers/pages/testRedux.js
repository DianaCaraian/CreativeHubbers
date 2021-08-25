import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions'; //o actiune care transmite la reducer datele
import TestStore from '../Components/TestStore'; //Component that listens for users state and lists the user that was found
import Users from './users/[userName]';
export default function TestRedux() {
  const [name, setName] = useState("");
  const dispatch = useDispatch(); //Declanseaza actiunea
  return (
    <>
      <Typography variant="h1">Hello</Typography>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          let url = "https://api.github.com/users/" + name;
          (async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(users.message)

            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            if(http.status == 404){
              alert("Hello");
            } else{      


           
            (() => {
              dispatch(getUsers(data));
            })()};
          })();
        }}
      >
        Search
      </Button>
      <TestStore />
    </>
  );
}