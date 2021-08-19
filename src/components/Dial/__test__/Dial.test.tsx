import * as React from "react";
import {render} from "@testing-library/react";
import {Dial} from "../Dial";

const props = {
  diameter: 10,
  min: 0,
  max: 10,
  step: 1,
  value: 5,
  onValueChange: () => null,
};

describe("Dial", () => {
  it("should match snapshot", () => {
    const wrapper = render(<Dial {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
