import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("Header component", () => {
  it("should show the header with the logo", () => {
    render(<Header />);

    const logo = screen.getByRole("img", { name: "logo" });
    expect(logo).toBeInTheDocument();
  });
});
