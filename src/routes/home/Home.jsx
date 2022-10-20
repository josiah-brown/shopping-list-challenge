import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Button from "@mui/material/Button";
import ShoppingList from "./shopping_list/ShoppingList";
import { Card } from "@mui/material";

const Home = () => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <Nav theme={"dark"} />
      {items.length > 0 ? (
        <ShoppingList />
      ) : (
        <Card className="w-[614px] relative mx-auto mt-[174px] flex justify-center py-[127px]">
          <p className="absolute top-[87px] light-text">
            Your shoppping list is empty :(
          </p>
          <Button variant="contained" className="uncapitalize">
            <Link to="/add">Add your first item</Link>
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Home;
