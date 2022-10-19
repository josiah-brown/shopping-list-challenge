import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./itemsSlice";

// Create the redux store
// configureStore() automatically passes all slice reducers to combineReducers().
// redux-thunk middleware is also automatically added.
const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
