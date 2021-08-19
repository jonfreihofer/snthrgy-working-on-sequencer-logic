import React from "react";
import {screen, render} from "@testing-library/react";
import Osc1 from "./Osc1";
import Osc2 from "./Osc2";

describe("Oscilators", () => {
  test("Osc1 should render correctly", () => {
    const {asFragment} = render(<Osc1 />);

    screen.getByText("Osc 1");
    screen.getByText("Wave");
    screen.getByText("Tune");
    screen.getByText("Pan");

    expect(asFragment()).toMatchSnapshot();
  });

  test("Osc2 should render correctly", () => {
    const {asFragment} = render(<Osc2 />);

    screen.getByText("Osc 2");
    screen.getByText("Wave");
    screen.getByText("Tune");
    screen.getByText("Pan");

    expect(asFragment()).toMatchSnapshot();
  });
});
