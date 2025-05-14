import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button component", () => {
  it("should show a button with an icon", () => {
    const handleClickButton = jest.fn();

    render(
      <Button
        leftIcon={<span>Test</span>}
        handleClick={() => handleClickButton()}
      >
        Close
      </Button>
    );
    const buttonElement = screen.getByText(/Close/i);
    expect(buttonElement).toBeInTheDocument();

    const icon = screen.getByText(/Test/i);
    expect(icon).toBeInTheDocument();
  });

  it("should click the button and call the function", () => {
    const handleClickButton = jest.fn();

    render(
      <Button
        leftIcon={<span>Test</span>}
        handleClick={() => handleClickButton()}
      >
        Close
      </Button>
    );
    const buttonElement = screen.getByText(/Close/i);
    fireEvent.click(buttonElement);
    expect(handleClickButton).toHaveBeenCalled();
  });
});
