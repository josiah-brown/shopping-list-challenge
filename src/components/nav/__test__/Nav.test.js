import React from "react";
import { renderWithProviders } from "../../../test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup } from "@testing-library/react";

import Nav from "../Nav";

afterEach(cleanup);

describe("Nav", () => {
  const history = createMemoryHistory();
  test("Dark themed nav renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Nav theme="dark" />
      </Router>
    );
  });

  test("Light themed nav renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Nav theme="light" />
      </Router>
    );
  });
});
