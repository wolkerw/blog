import React from "react";
import { render, screen } from "@testing-library/react";

import { PostsList } from "./PostsList";
import { FilterContext } from "../../../contexts/filterContext/filterContext";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

const mockPosts = [
  {
    id: "1",
    title: "Test",
    author: { name: "Author Name", profilePicture: "google.com" },
    createdAt: "2025-05-13T13:35:34.000Z",
    thumbnail_url: "",
    content: "Content",
  },
];
const mockLoadHomePosts = async () => mockPosts;

describe("PostsList component", () => {
  it("should show an empty list of posts", () => {
    render(<PostsList />);

    const noResults = screen.getByText(/No results found./i);
    expect(noResults).toBeInTheDocument();
  });

  it("should show a list with a post", () => {
    render(
      <FilterContext
        value={{
          loadHomePosts: mockLoadHomePosts,
          posts: mockPosts,
          setSearchText: () => null,
        }}
      >
        <PostsList />
      </FilterContext>
    );

    const title = screen.getByText(/Test/i);
    expect(title).toBeInTheDocument();
  });
});
