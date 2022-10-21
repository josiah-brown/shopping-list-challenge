import React from "react";
import { renderWithProviders } from "../../../test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup } from "@testing-library/react";

import Spinner from "../Spinner";

afterEach(cleanup);

describe("Spinner", () => {
  const history = createMemoryHistory();
  test("Spinner renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <Spinner />
      </Router>
    );
  });
});
