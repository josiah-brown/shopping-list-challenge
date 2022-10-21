import React from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav/Nav";
import { Box } from "@mui/material";
import Home from "./Home";
import MyForm from "../components/my_form/MyForm";

// Render the Home component behind everything.
// Render link on top of home to darken and allow any click outside of the form to return home.
// Render the form component on top with type "add"
const Add = () => {
  return (
    <Box>
      <Home />
      <Link
        to="/"
        className="w-screen h-screen fixed left-0 top-0 bg-black opacity-25"
      ></Link>
      <Box className="w-[568px] h-screen absolute top-0 right-0 bg-white z-50">
        <Nav theme="light" />
        <MyForm type="add" />
      </Box>
    </Box>
  );
};

export default Add;
