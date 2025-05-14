import { postsService } from "../services/Posts";

jest.spyOn(postsService, "getAll").mockResolvedValue([
  {
    id: "1",
    title: "Test",
    author: { name: "Author Name", profilePicture: "google.com" },
    createdAt: "2025-05-13T13:35:34.000Z",
    thumbnail_url: "",
    content: "Content",
  },
]);

describe("Posts service", () => {
  it("should get all posts with success", async () => {
    await postsService.getAll();
    expect(postsService.getAll).toHaveBeenCalledTimes(1);
  });
});
