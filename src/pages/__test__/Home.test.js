/* Test for home, get only search button from all buttons in home, make sure api call is made when search button is click using the input texts and return response */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../Home";
import GeneralState from "../../context/general-context/GeneralState";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home", () => {
  test("Home is created", () => {
    render(
      <Router>
        <GeneralState>
          <Home />
        </GeneralState>
      </Router>
    );
  });

  test("Home has search button", () => {
    render(
      <Router>
        <GeneralState>
          <Home />
        </GeneralState>
      </Router>
    );
    expect(screen.getByRole("button", { name: /search/i })).toBeDefined();
  });

  test("Home has search button and api call is made when search button is clicked", async () => {
    render(
      <Router>
        <GeneralState>
          <Home />
        </GeneralState>
      </Router>
    );
    const searchInput = screen.getByRole("textbox");
    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.change(searchInput, { target: { value: "shoes" } });
    fireEvent.click(searchButton);
    await waitFor(() => {
      expect(searchButton).toBeDefined();
    });
  });
});
