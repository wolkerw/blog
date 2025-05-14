import React from "react";
import { render, screen } from "@testing-library/react";

import { FilterContext } from "./filterContext";

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

describe("Filter context", () => {
  it("should load the context", () => {
    render(
      <FilterContext
        value={{
          loadHomePosts: mockLoadHomePosts,
          posts: mockPosts,
          setSearchText: () => null,
        }}
      >
        <>{mockPosts?.[0]?.title}</>
      </FilterContext>
    );

    const title = screen.getByText(/Test/i);
    expect(title).toBeInTheDocument();
  });
});
