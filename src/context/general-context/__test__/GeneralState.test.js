/* Test for generalState from "../GeneralState.js", use only react-testing library and not jest and also test for state, dispatch and api calls*/

import React from "react";
import { render, screen } from "@testing-library/react";
import GeneralState from "../GeneralState";
import GeneralContext from "../GeneralContext";

describe("GeneralState", () => {
  test("GeneralState is created", () => {
    render(
      <GeneralState>
        <GeneralContext.Consumer>
          {(context) => {
            expect(context).toBeDefined();
            return null;
          }}
        </GeneralContext.Consumer>
      </GeneralState>
    );
  });

  test("GeneralState has api calls", () => {
    render(
      <GeneralState>
        <GeneralContext.Consumer>
          {(context) => {
            expect(context.getProducts).toBeDefined();
            return null;
          }}
        </GeneralContext.Consumer>
      </GeneralState>
    );
  });

  /* test for api response*/
  test("GeneralState has api calls and api response", async () => {
    render(
      <GeneralState>
        <GeneralContext.Consumer>
          {(context) => {
            expect(context.getProducts).toBeDefined();
            context.getProducts({ params: "shoes" });
            expect(context.state.products).toBeDefined();
            return null;
          }}
        </GeneralContext.Consumer>
      </GeneralState>
    );
  });
});
