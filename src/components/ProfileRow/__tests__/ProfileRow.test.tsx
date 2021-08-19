import React from "react";
import {render, screen} from "@testing-library/react";
import ProfileRow from "../index";

describe("ProfileRow", () => {
  it("should render correctly", () => {
    const {asFragment} = render(<ProfileRow />);

    screen.getByText("Log in");
    expect(asFragment).toMatchSnapshot();
  });
});
