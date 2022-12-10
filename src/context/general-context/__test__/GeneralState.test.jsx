import React from "react";
import { render, screen } from "@testing-library/react";
import GeneralState from "../GeneralState";
import GeneralContext from "../GeneralContext";
import { useContext } from "react";
import { GET_PRODUCTS } from "../../types";
import { BASE_URI } from "../../../utils/baseUri";
import axios from "axios";
import { renderHook, act } from "@testing-library/react-hooks";

describe("GeneralState", () => {
  test("renders GeneralState component", () => {
    render(<GeneralState />);
  });

  test("should get products", async () => {
    const { result } = renderHook(() => useContext(GeneralContext));
    const { getProducts } = result.current;
    const res = await axios.get(`${BASE_URI}/search?q=`);
    act(() => {
      getProducts({ params: "" });
    });
    expect(result.current.products).toEqual(res.data);
  });
});
