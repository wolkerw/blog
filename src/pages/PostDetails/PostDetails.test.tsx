import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useParams } from "react-router";

import { IPost } from "../../interfaces/Post";
import { postsService } from "../../services/Posts";
import { PostDetails } from "./PostDetails";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router", () => ({
  useNavigate: () => mockedUsedNavigate,
  useParams: jest.fn(),
}));

jest.spyOn(postsService, "getPost").mockImplementation(
  (id: string): Promise<IPost | null> =>
    Promise.resolve({
      id: "1",
      title: "Test",
      author: { name: "Author Name", profilePicture: "google.com" },
      createdAt: "2025-05-13T13:35:34.000Z",
      thumbnail_url: "",
      content: "Content",
    })
);

describe("PostDetails page", () => {
  it("should show the post details page", async () => {
    jest.mocked(useParams).mockReturnValue({ id: "1" });
    render(<PostDetails />);
    expect(postsService.getPost).toHaveBeenCalledWith("1");
  });
});
