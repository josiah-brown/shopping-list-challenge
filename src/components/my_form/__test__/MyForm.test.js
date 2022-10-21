import React from "react";
import { renderWithProviders } from "../../../test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup } from "@testing-library/react";

import MyForm from "../MyForm";

afterEach(cleanup);

const fakeItem = {
  name: "Fake item",
  description: "This is a fake item",
  qty: 3,
  purchased: true,
  _id: "fakeid123",
};

describe("MyForm", () => {
  const history = createMemoryHistory();
  test("Add form renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <MyForm type="add" testData={fakeItem} />
      </Router>
    );
  });

  test("Edit form renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <MyForm type="edit" testData={fakeItem} />
      </Router>
    );
  });
});
