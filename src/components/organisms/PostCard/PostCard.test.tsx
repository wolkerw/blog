import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { PostCard } from "./PostCard";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

const mockPost = {
  id: "1",
  title: "Test",
  author: { name: "Author Name", profilePicture: "google.com" },
  createdAt: "2025-05-13T13:35:34.000Z",
  thumbnail_url: "",
  content: "Content",
};

describe("PostCard component", () => {
  it("should show a post card with info", () => {
    render(<PostCard post={mockPost} />);

    const thumbnailImage: HTMLElement = screen.getByRole("img", {
      name: "post-thumb",
    });
    expect(thumbnailImage).toBeInTheDocument();

    const title = screen.getByText(/Test/i);
    expect(title).toBeInTheDocument();
  });
});
