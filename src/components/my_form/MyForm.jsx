import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItem, editItem } from "../../redux/itemsSlice";

import {
  Typography,
  TextField,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

// A general purpose form used for add or edit routes
const MyForm = (props) => {
  // Destructure the type prop.
  // This is used to conditionally render the edit or add form
  const { type } = props;

  // Used for testing only
  const testData = props?.testData;

  // Allows form to dispatch actions to redux store
  const dispatch = useDispatch();

  // Get hold of the items array in state
  const items = useSelector((state) => state.items);

  // Used to navigate back to the home after item submit or click away
  const navigate = useNavigate();

  // Get id of specific item for edit page
  const params = useParams();
  const currId = params?.id;

  // Store state for the item input field
  const [itemState, setItemState] = useState(() => {
    return !testData
      ? type === "add"
        ? { name: "", description: "", qty: 1 }
        : items.filter((item) => {
            return item._id === currId;
          })[0]
      : testData;
  });

  // Store error states for relevant form fields
  const [errors, setErrors] = useState({
    nameError: "",
    descriptionError: "",
  });

  // Called when the user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure the item has a name
    if (!itemState.name.length > 0) {
      setErrors((prev) => {
        return { ...prev, nameError: "Item name is required." };
      });
      return;
    }

    // Require the description field
    if (!itemState.description.length > 0) {
      setErrors((prev) => {
        return { ...prev, descriptionError: "Description is required." };
      });
      return;
    }

    // Dispatch actions based on type of form
    if (type === "add") {
      dispatch(addItem(itemState));
      navigate("/");
    } else if (type === "edit") {
      dispatch(editItem(itemState));
      navigate("/");
    }
  };

  // Update name and desc state and errors on input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setItemState((prevState) => {
      return { ...prevState, [id]: value };
    });
    setErrors((prev) => {
      return { ...prev, [id + "Error"]: "" };
    });
  };

  // Handle change to item quantity select input
  const handleQtyChange = (e) => {
    const { name, value } = e.target;
    setItemState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  // Toggle purchased state on checkbox click
  const handleCheckboxChange = () => {
    setItemState((prev) => {
      return { ...prev, purchased: !prev.purchased };
    });
  };

  // Render the form
  return (
    <form
      action="submit"
      onSubmit={handleSubmit}
      className="mt-[28px] mx-[30px] space-y-[18px]"
    >
      <Typography
        color="primary.typeMain"
        fontSize={18}
        lineHeight={"24px"}
        fontWeight={400}
      >
        {type === "add" ? "Add an Item" : "Edit an Item"}
      </Typography>
      <Typography color="primary.typeSecond">
        {type === "add" ? "Add your new item below" : "Edit your item below"}
      </Typography>
      <TextField
        error={errors.nameError ? true : false}
        helperText={errors.nameError}
        id="name"
        label="Item Name"
        variant="outlined"
        value={itemState.name}
        onChange={handleChange}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "primary.gray4",
            },
          },
          "& .MuiInputBase-root": {
            color: "primary.gray3",
          },
          "& .MuiFormLabel-root": {
            color: "primary.gray3",
          },
        }}
      />
      <TextField
        error={errors.descriptionError ? true : false}
        helperText={errors.descriptionError}
        id="description"
        label="Description"
        variant="outlined"
        value={itemState.description}
        onChange={handleChange}
        rows="6"
        multiline
        fullWidth
        inputProps={{ maxLength: 100 }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "primary.gray4",
            },
          },
          "& .MuiInputBase-root": {
            color: "primary.gray3",
          },
          "& .MuiFormLabel-root": {
            color: "primary.gray3",
          },
        }}
      />

      <Typography
        className="absolute right-14 top-[370px]"
        color={"primary.gray3"}
      >
        {itemState.description.length + "/100"}
      </Typography>

      <TextField
        name="qty"
        label="Quantity"
        value={itemState.qty}
        onChange={handleQtyChange}
        fullWidth
        select
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "primary.gray4",
            },
          },
          "& .MuiInputBase-root": {
            color: "primary.gray3",
          },
          "& .MuiFormLabel-root": {
            color: "primary.gray3",
          },
        }}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </TextField>

      {type === "edit" ? (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={itemState.purchased}
                onChange={handleCheckboxChange}
                sx={{
                  color: "#c6c6c6",
                  "&.Mui-checked": {
                    color: "#4D81B7",
                  },
                }}
              />
            }
            label={<Typography color={"primary.gray3"}>Purchased</Typography>}
          />
        </FormGroup>
      ) : null}

      <div className="absolute right-[20px] bottom-[26px] space-x-8">
        <Button variant="text" className="uncapitalize">
          <Link to={"/"} className="text-black">
            Cancel
          </Link>
        </Button>
        <Button type="submit" variant="contained" className="uncapitalize">
          {type === "add" ? "Add Task" : "Save Item"}
        </Button>
      </div>
      <div className="absolute left-0 bottom-0 w-full h-[5px] bg-[#4D81B7]"></div>
    </form>
  );
};

export default MyForm;
