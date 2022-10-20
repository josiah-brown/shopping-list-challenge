import React from "react";
import { Card, Checkbox } from "@mui/material";

const ListItem = ({ itemName }) => {
  return (
    <Card variant="outlined" className="flex flex-row">
      <Checkbox />
      <div>
        <p>{itemName}</p>
      </div>
    </Card>
  );
};

export default ListItem;
