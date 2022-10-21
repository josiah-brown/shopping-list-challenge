import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav/Nav";
import { Box } from "@mui/material";
import MyForm from "../components/my_form/MyForm";
import Home from "./Home";

// Render the Home component behind everything.
// Render full-screen link on top of Home to darken and allow any click outside of the form to return home.
// Render the form component on top with type "edit"
const Edit = () => {
  // Effect that slides the form in from the right and fades in the dark background
  useEffect(() => {
    const form = document.getElementById("edit_container");
    form.style.transform = `translateX(0px)`;
    const bg = document.getElementById("edit_form_bg");
    bg.style.opacity = "0.25";
  });
  return (
    <Box>
      <Home />
      <Link
        to="/"
        id="edit_form_bg"
        className="w-screen h-screen fixed left-0 top-0 bg-black fade_in"
      ></Link>
      <Box
        id="edit_container"
        className="w-[568px] h-screen absolute top-0 right-0 bg-white z-50 slide_in"
      >
        <Nav theme="light" />
        <MyForm type="edit" />
      </Box>
    </Box>
  );
};

export default Edit;
