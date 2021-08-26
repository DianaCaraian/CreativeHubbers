import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions"; //o actiune care transmite la reducer datele
import TestStore from "./TestStore"; //Component that listens for users state and lists the user that was found

const HeroContent = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch(); //Declanseaza actiunea

    return <div>
        <Box className = {styles.heroBoxes}>
            <Typography variant="h1" component="h1" >
                W E L C O M E
            </Typography>
            <Typography variant="h3" >
                to a new experience of git
            </Typography>
           <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
        value={name}
        className = {styles.inputz}
      />
      <Link href="http://localhost:3000/users">
      <Button
        variant="contained"
        color="primary"
        className="searchBtn"
        onClick={() => {
          let url = "https://api.github.com/users/" + name;
          (async () => {
            const res = await fetch(url);
            const data = await res.json();
            (() => {
              dispatch(getUsers(data));
            })();
          })();
        }}
      >
        Search
      </Button>  
      </Link>
        </Box>
       

        
        
    </div>
  );
};

export default HeroContent;
