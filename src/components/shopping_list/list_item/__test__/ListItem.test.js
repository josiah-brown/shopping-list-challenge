import React from "react";
import { renderWithProviders } from "../../../../test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup } from "@testing-library/react";

import ListItem from "../ListItem";

const fakeItem = {
  name: "Fake item",
  description: "This is a fake item",
  qty: 3,
  purchased: true,
  _id: "fakeid123",
};

afterEach(cleanup);

describe("ListItem", () => {
  const history = createMemoryHistory();
  test("ListItem renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <ListItem item={fakeItem} />
      </Router>
    );
  });
});
