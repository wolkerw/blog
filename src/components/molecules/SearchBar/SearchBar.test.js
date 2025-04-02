import { render, screen, fireEvent } from "@testing-library/react";

import { SearchBar } from "./SearchBar";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe("SearchBar component", () => {
  it("should show the search bar and click in the search button", () => {
    render(<SearchBar />);

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByRole("button");
    fireEvent.click(searchButton);
  });
});
