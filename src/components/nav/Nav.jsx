import React from "react";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Nav = ({ theme }) => {
  return theme === "dark" ? (
    <Box
      color="primary.white"
      sx={{
        backgroundColor: "primary.darkBlue",
      }}
      className="text-[18px] pl-[30px] pt-[20px] pb-[21px] dosis tracking-[0.25px] leading-[23px]"
    >
      SHOPPING LIST
    </Box>
  ) : (
    <Box
      sx={{
        backgroundColor: "primary.bgLight",
        color: "primary.typeSecond",
        borderColor: "primary.gray4",
      }}
      className="flex justify-between text-[18px] px-[30px] pt-[20px] pb-[21px] border-b-[0.5px] tracking-[0.25px] leading-[23px]"
    >
      <p className="inline dosis">SHOPPING LIST</p>
      <Link to="/">
        <LastPageIcon className="inline" />
      </Link>
    </Box>
  );
};

export default Nav;
