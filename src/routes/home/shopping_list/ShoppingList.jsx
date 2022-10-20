import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./list_item/ListItem";

const ShoppingList = () => {
  const items = useSelector((state) => state.items);
  return (
    <div>
      {items.map((item, index) => {
        return <ListItem key={item + index} itemName={item} />;
      })}
    </div>
  );
};

export default ShoppingList;
