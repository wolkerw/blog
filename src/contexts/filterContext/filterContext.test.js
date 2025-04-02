import { render, screen } from "@testing-library/react";

import { FilterContext } from "./filterContext";

const mockPosts = [{ title: "Title", author: { name: "Author Name" } }];
const mockLoadHomePosts = async () => mockPosts;

describe("Filter context", () => {
  it("should load the context", () => {
    render(
      <FilterContext
        value={{ loadHomePosts: mockLoadHomePosts, posts: mockPosts }}
      >
        <>{mockPosts?.[0]?.title}</>
      </FilterContext>
    );

    const title = screen.getByText(/Title/i);
    expect(title).toBeInTheDocument();
  });
});
