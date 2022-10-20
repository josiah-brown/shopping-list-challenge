import React from "react";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Link } from "react-router-dom";

const Nav = ({ theme }) => {
  return theme === "dark" ? (
    <nav className="background-blue text-white text-[18px] pl-[30px] pt-[20px] pb-[21px]">
      SHOPPING LIST
    </nav>
  ) : (
    <nav className="flex justify-between bg-[#FAFAFA] c-secondary text-[18px] px-[30px] pt-[20px] pb-[21px]">
      <p className="inline">SHOPPING LIST</p>
      <Link to="/">
        <LastPageIcon className="inline" />
      </Link>
    </nav>
  );
};

export default Nav;
