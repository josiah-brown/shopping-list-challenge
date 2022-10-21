import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Button from "@mui/material/Button";
import ShoppingList from "../../components/shopping_list/ShoppingList";
import { Card, Typography } from "@mui/material";

const Home = (props) => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <Nav theme={"dark"} />
      {items.length > 0 ? (
        <ShoppingList />
      ) : (
        <Card className="w-[614px] relative mx-auto mt-[174px] flex justify-center py-[127px]">
          <Typography color="primary.gray1" className="absolute top-[87px]">
            Your shopping list is empty :(
          </Typography>
          <Button variant="contained" className="uncapitalize">
            <Link to="/add">Add your first item</Link>
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Home;
