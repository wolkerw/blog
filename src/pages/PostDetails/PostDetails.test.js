import { render, screen } from "@testing-library/react";
import { useParams } from "react-router";

import { PostDetails } from "./PostDetails";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
  useParams: jest.fn(),
}));

describe("PostDetails page", () => {
  it("should show the post details page", () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });
    render(<PostDetails />);

    const authorText = screen.getByText(/Written by/i);
    expect(authorText).toBeInTheDocument();
  });
});
