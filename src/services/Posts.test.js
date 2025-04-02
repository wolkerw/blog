import { postsService } from "./Posts";

jest.mock("./Posts", () => ({
  postsService: {
    getAll: jest.fn(),
  },
}));

describe("Posts service", () => {
  it("should get all posts with success", async () => {
    postsService.getAll.mockResolvedValue([{ id: 1, title: "Test" }]);
    const allPosts = await postsService.getAll();
    expect(allPosts.length).toEqual(1);
  });
});
