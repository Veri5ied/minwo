import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

/* Input should have value, onChange and onCLick props */

describe("SearchInput", () => {
  test("renders SearchInput component", () => {
    render(<SearchInput />);
  });
});
