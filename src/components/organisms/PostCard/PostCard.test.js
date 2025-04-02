import { render, screen } from "@testing-library/react";

import { PostCard } from "./PostCard";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

const mockPost = {
  title: "Title",
  author: { name: "Author Name" },
  thumbnail_url: "test",
};

describe("PostCard component", () => {
  it("should show a post card with info", () => {
    render(<PostCard post={mockPost} />);

    const thumbnailImage = screen.getByRole("img", { name: "post-thumb" });
    expect(thumbnailImage).toBeInTheDocument();

    const title = screen.getByText(/Title/i);
    expect(title).toBeInTheDocument();
  });
});
