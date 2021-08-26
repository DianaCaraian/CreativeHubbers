import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions"; //o actiune care transmite la reducer datele
import TestStore from "../../Components/TestStore"; //Component that listens for users state and lists the user that was found
export default function TestRedux() {
  const [name, setName] = useState("");
  const dispatch = useDispatch(); //Declanseaza actiunea
  return (
    <>
      <TestStore />
    </>
  );
}
