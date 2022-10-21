import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav/Nav";
import { Box } from "@mui/material";
import Home from "./Home";
import MyForm from "../components/my_form/MyForm";

// Render the Home component behind everything.
// Render link on top of home to darken and allow any click outside of the form to return home.
// Render the form component on top with type "add"
const Add = () => {
  // Effect that slides the form in from the right and fades in the dark background
  useEffect(() => {
    const form = document.getElementById("add_container");
    form.style.transform = `translateX(0px)`;
    const bg = document.getElementById("add_form_bg");
    bg.style.opacity = "0.25";
  });

  return (
    <Box>
      <Home />
      <Link
        to="/"
        id="add_form_bg"
        className="w-screen h-screen fixed left-0 top-0 bg-black fade_in"
      ></Link>
      <Box
        id="add_container"
        className="w-[568px] h-screen absolute top-0 right-0 z-50 bg-white slide_in"
      >
        <Nav theme="light" />
        <MyForm type="add" />
      </Box>
    </Box>
  );
};

export default Add;
