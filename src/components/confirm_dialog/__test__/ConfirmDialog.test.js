import React from "react";
import { renderWithProviders } from "../../../test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup } from "@testing-library/react";

import ConfirmDialog from "../ConfirmDialog";

afterEach(cleanup);

const fakeData = {
  isOpen: false,
  title: "Hello World",
  subTitle: "This is a test",
};

describe("ConfirmDialog", () => {
  const history = createMemoryHistory();
  test("ConfirmDialog renders without crash", () => {
    renderWithProviders(
      <Router location={history.location} navigator={history}>
        <ConfirmDialog confirmDialog={fakeData} />
      </Router>
    );
  });
});
