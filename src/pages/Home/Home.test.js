import { render, screen } from "@testing-library/react";

import { Home } from "./Home";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home page", () => {
  it("should show the home page", () => {
    render(<Home />);

    const noResults = screen.getByText(/No results found./i);
    expect(noResults).toBeInTheDocument();
  });
});
