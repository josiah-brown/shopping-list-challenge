import React from "react";
import { renderWithProviders } from "../../../test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup } from "@testing-library/react";

import ShoppingList from "../ShoppingList";

const fakeList = [
  {
    name: "Fake item",
    description: "This is a fake item",
    qty: 3,
    purchased: true,
    _id: "fakeid1",
  },
  {
    name: "Fake item 2",
    description: "This is the second fake item",
    qty: 1,
    purchased: false,
    _id: "fakeid2",
  },
];

afterEach(cleanup);

describe("ShoppingList", () => {
  const history = createMemoryHistory();
  test("Shopping list renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <ShoppingList testData={fakeList} />
      </Router>
    );
  });
});
