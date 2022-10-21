import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Container, Stack, Box, Typography } from "@mui/material";
import ListItem from "./list_item/ListItem";

// Renders the shopping list stored in state.
const ShoppingList = (props) => {
  // Get items from state
  const items = useSelector((state) => state.items);

  // Data passed in solely for testing
  const testData = props?.testData;

  return (
    <Container>
      <Box mt={4} mb={2} className="flex justify-between items-center">
        <Typography
          color="primary.black"
          fontSize={18}
          fontWeight={600}
          lineHeight={"24px"}
        >
          Your Items
        </Typography>

        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "primary.main",
          }}
          className="uncapitalize"
        >
          <Link to={"/add"}>Add Item</Link>
        </Button>
      </Box>

      <Stack spacing={2}>
        {!testData
          ? items.map((item, index) => {
              return <ListItem key={item.name + index} item={item} />;
            })
          : testData.map((item, index) => {
              return <ListItem key={item.name + index} item={item} />;
            })}
      </Stack>
    </Container>
  );
};

export default ShoppingList;
