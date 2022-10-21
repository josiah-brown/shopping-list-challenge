import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from "@mui/material";

// A general purpose dialog box component
const ConfirmDialog = (props) => {
  // Destructure props
  const { confirmDialog, setConfirmDialog, action } = props;

  // Close the dialog on cancel or click away
  const handleClose = () => {
    setConfirmDialog((prev) => {
      return { ...prev, isOpen: false };
    });
  };

  // Render dialog box
  return (
    <Dialog open={confirmDialog.isOpen} onClose={handleClose}>
      <DialogTitle sx={{ fontSize: "18px" }}>{confirmDialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ fontSize: "14px" }}>
          {confirmDialog.subTitle}
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          paddingRight: "30px",
          paddingBottom: "30px",
          paddingTop: "70px",
        }}
      >
        <Button
          variant="text"
          sx={{ color: "primary.black" }}
          onClick={handleClose}
          className="uncapitalize"
        >
          Cancel
        </Button>
        <Button variant="contained" onClick={action} className="uncapitalize">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
