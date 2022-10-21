import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Add from "./routes/add/Add";
import Edit from "./routes/edit/Edit";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
