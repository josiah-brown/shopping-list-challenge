import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { editItem, deleteItem } from "../../../redux/itemsSlice";

import { Card, Checkbox, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ConfirmDialog from "../../confirm_dialog/ConfirmDialog";

// Render a single list item
const ListItem = ({ item }) => {
  // Destructure the item passed in via props
  const { name, description, purchased, _id } = item;

  // Set default state of confirm delete dialog
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  // Used to dispatch actions to reducer
  const dispatch = useDispatch();

  // Called when the checkbox is toggled.
  // Updated the "purchased" state of the given item
  const handleCheckboxChange = () => {
    const newVal = !purchased;
    const updatedItem = { ...item, purchased: newVal };
    dispatch(editItem(updatedItem));
  };

  // Called when the user clicks on the delete button.
  // Displays a dialog to confirm delete action.
  const showDialog = (e) => {
    e.preventDefault();
    setConfirmDialog({
      isOpen: true,
      title: "Delete Item?",
      subTitle:
        "Are you sure you want to delete this item? This can not be undone.",
    });
  };

  // Called only if the user confirms the delete action in the popup dialog
  const handleDelete = () => {
    dispatch(deleteItem(_id));
  };

  // Render the item
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "primary.gray4",
        borderWidth: "0.5px",
        backgroundColor: purchased ? "primary.bgLight" : "primary.white",
      }}
      className="flex flex-row h-[87px] items-center justify-between"
    >
      <div className="flex">
        <div className="mx-[10px]">
          <Checkbox
            checked={purchased}
            onChange={handleCheckboxChange}
            sx={{
              color: "#c6c6c6",
              "&.Mui-checked": {
                color: "#4D81B7",
              },
            }}
          />
        </div>

        <div className="space-y-2">
          <Typography
            fontWeight={600}
            fontSize={16}
            lineHeight="20px"
            sx={{
              color: purchased ? "primary.darkBlue" : "primary.black",
              textDecoration: purchased ? "line-through" : "none",
            }}
          >
            {name}
          </Typography>
          <Typography
            color="primary.gray5"
            fontSize={14}
            fontWeight={600}
            sx={{
              textDecoration: purchased ? "line-through" : "none",
            }}
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className="mr-[30px] space-x-[25px] pointer-events-auto">
        <Link to={"/edit/" + _id}>
          <EditIcon
            sx={{
              color: "primary.gray2",
            }}
          />
        </Link>
        <DeleteOutlineIcon
          onClick={showDialog}
          sx={{ cursor: "pointer", color: "primary.gray2" }}
        />
      </div>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
        action={handleDelete}
      />
    </Card>
  );
};

export default ListItem;
