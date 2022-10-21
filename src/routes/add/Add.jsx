import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import { Box } from "@mui/material";
import Home from "../home/Home";
import MyForm from "../../components/my_form/MyForm";

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
        <div className="absolute left-0 bottom-0 w-full h-[5px] background-blue"></div>
      </Box>
    </Box>
  );
};

export default Add;
