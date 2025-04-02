import { render, screen } from "@testing-library/react";

import { PostsList } from "./PostsList";
import { FilterContext } from "../../../contexts/filterContext/filterContext";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
}));

const mockPosts = [{ title: "Title", author: { name: "Author Name" } }];
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
        value={{ loadHomePosts: mockLoadHomePosts, posts: mockPosts }}
      >
        <PostsList />
      </FilterContext>
    );

    const title = screen.getByText(/Title/i);
    expect(title).toBeInTheDocument();
  });
});
