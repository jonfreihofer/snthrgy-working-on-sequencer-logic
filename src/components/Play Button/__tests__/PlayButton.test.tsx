import { render } from "@testing-library/react";
import React from "react";
import { PlayButton } from "..";

describe("play button", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PlayButton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
