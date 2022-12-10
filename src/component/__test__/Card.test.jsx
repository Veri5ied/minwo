import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../card/Card";

describe("Card", () => {
  test("renders Card component", () => {
    render(
      <Card
        title="Test"
        thumbnail="Test"
        description="Test"
        brand="Test"
        price="Test"
      />
    );
  });
});
