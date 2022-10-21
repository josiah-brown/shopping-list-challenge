import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Nav from "../components/nav/Nav";
import ShoppingList from "../components/shopping_list/ShoppingList";
import { Card, Typography, Button } from "@mui/material";
import Spinner from "../components/spinner/Spinner";

const Home = () => {
  // Get hold of the global redux items array
  const items = useSelector((state) => state.items);

  // State used to show the spinner on load
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [items]);

  // If there are items in state, render the ShoppingList
  // Otherwise, render a default CTA card
  return (
    <div>
      <Nav theme={"dark"} />
      {items.length > 0 ? (
        <ShoppingList />
      ) : loading ? (
        <Spinner />
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
