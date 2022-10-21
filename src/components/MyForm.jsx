import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem } from "../redux/itemsSlice";

const MyForm = (props) => {
  const { type } = props;

  // Allows form to dispatch actions to redux store
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  // Used to navigate back to the list after item submit
  const navigate = useNavigate();
  const params = useParams();
  const currId = params?.id;

  // Store state for the item input field
  const [itemState, setItemState] = useState(() => {
    return type === "add"
      ? { name: "", description: "", qty: 1 }
      : items.filter((item) => {
          return item._id === currId;
        })[0];
  });

  const [errors, setErrors] = useState({
    nameError: "",
    descriptionError: "",
    qtyError: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemState.name.length > 0) {
      setErrors((prev) => {
        return { ...prev, nameError: "Item name is required." };
      });
      return;
    }

    if (!itemState.description.length > 0) {
      setErrors((prev) => {
        return { ...prev, descriptionError: "Description is required." };
      });
      return;
    }

    if (type === "add") {
      dispatch(addItem(itemState));
      navigate("/");
    }

    if (type === "edit") {
      dispatch(editItem(itemState));
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setItemState((prevState) => {
      return { ...prevState, [id]: value };
    });
    setErrors((prev) => {
      return { ...prev, [id + "Error"]: "" };
    });
  };

  const handleQtyChange = (e) => {
    const { name, value } = e.target;
    setItemState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleCheckboxChange = () => {
    setItemState((prev) => {
      return { ...prev, purchased: !prev.purchased };
    });
  };

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
        sx={{ position: "relative" }}
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
              />
            }
            label="Purchased"
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
    </form>
  );
};

export default MyForm;
