import React from "react";
import NavTwo from "./NavTwo";

const Layout = (props) => {
  return (
    <>
      <NavTwo/>
      {props.children}
    </>
  );
};

export default Layout;
