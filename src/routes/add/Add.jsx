import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/itemsSlice";

const Add = () => {
  // Allows form to dispatch actions to redux store
  const dispatch = useDispatch();

  // Store state for the item input field
  const [newItem, setNewItem] = useState("");

  // Called when the form is submitted to add an item
  const handleAddItem = (e) => {
    e.preventDefault();
    dispatch(addItem(newItem));
  };

  const handleItemChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div>
      <h1>Add</h1>

      <form action="submit" onSubmit={handleAddItem}>
        <input name="item" value={newItem} onChange={handleItemChange} />
        <button type="submit">Add</button>
      </form>

      <Link to={"/"}>Return Home</Link>
    </div>
  );
};

export default Add;
