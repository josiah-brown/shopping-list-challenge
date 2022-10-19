import { createSlice } from "@reduxjs/toolkit";

// From the Redux docs:
// createSlice lets you write reducers that use the Immer library to enable writing
// immutable updates using "mutating" JS syntax like state.value = 123, with no
// spreads needed.It also automatically generates action creator functions for each
// reducer, and generates action type strings internally based on your reducer's names.
const itemsSlice = createSlice({
  name: "items",
  initialState: ["Tomatoes", "Apples", "Lettuce"],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    editItem: (state, action) => {
      return state;
    },
  },
});

export const { addItem, editItem } = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;
