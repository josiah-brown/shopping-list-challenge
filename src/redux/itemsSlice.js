import { createSlice } from "@reduxjs/toolkit";

// From the Redux docs:
// createSlice lets you write reducers that use the Immer library to enable writing
// immutable updates using "mutating" JS syntax like state.value = 123, with no
// spreads needed.It also automatically generates action creator functions for each
// reducer, and generates action type strings internally based on your reducer's names.
const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    // Simply push a new item object to the items array
    addItem: (state, action) => {
      state.push({
        ...action.payload,
        purchased: false,
        _id: action.payload.name + new Date().getTime().toString(),
      });
    },
    // Find item with matching id and replace with the payload
    editItem: (state, action) => {
      // The payload contains an item object
      return state.map((item) => {
        if (item._id === action.payload._id) {
          return action.payload;
        } else {
          return item;
        }
      });
    },
    // find item with matching id and remove from state
    deleteItem: (state, action) => {
      // The payload contains an item id
      return state.filter((item) => {
        return item._id !== action.payload;
      });
    },
  },
});

export const { addItem, editItem, deleteItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
