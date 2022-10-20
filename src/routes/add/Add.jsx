import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/itemsSlice";
import Nav from "../../components/nav/Nav";
import {
  TextField,
  Button,
  MenuItem,
  InputLabel,
  Select,
  Input,
} from "@mui/material";

const Add = () => {
  // Allows form to dispatch actions to redux store
  const dispatch = useDispatch();

  // Store state for the item input field
  const [itemState, setItemState] = useState({
    name: "",
    description: "",
    qty: 1,
  });

  // Called when the form is submitted to add an item
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addItem(itemState));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Updating", name, value);
    setItemState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div className="w-screen h-screen bg-slate-300">
      <div className="w-[568px] h-full mx-auto bg-white relative">
        <Nav theme="light" />
        <form
          action="submit"
          onSubmit={handleAddItem}
          className="mt-[28px] mx-[30px]"
        >
          <h2 className="text-[18px] c-primary">Add an Item</h2>
          <p className="text-[16px] c-secondary">Add your new item below</p>
          <TextField
            name="name"
            label="Item Name"
            variant="outlined"
            value={itemState.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            value={itemState.description}
            onChange={handleChange}
            rows="6"
            multiline
            fullWidth
          />
          <InputLabel id="qty-select-label"></InputLabel>
          <Select
            name="qty"
            label="Quantity"
            labelId="qty-select-label"
            // variant="outlined"
            value={itemState.qty}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </form>

        <div className="absolute right-[20px] bottom-[26px] space-x-8">
          <Button variant="text" className="uncapitalize">
            <Link to={"/"}>Cancel</Link>
          </Button>
          <Button variant="contained" className="uncapitalize">
            <Link to={"/"}>Add Task</Link>
          </Button>
        </div>
        <div className="absolute left-0 bottom-0 w-full h-[5px] background-blue"></div>
      </div>
    </div>
  );
};

export default Add;
