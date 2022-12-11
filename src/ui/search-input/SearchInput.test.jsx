import React from "react";
import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  test("renders SearchInput component", () => {
    render(
      <SearchInput
        value={""}
        onChange={() => {}}
        onClick={() => {}}
        error={false}
      />
    );
  });
});
