import axios from "axios";
import { IPost } from "../interfaces/Post";

const baseURL = "https://tech-test-backend.dwsbrazil.io/posts";

interface IPostService {
  getAll: () => Promise<IPost[]>;
  getPost: (id: string) => Promise<IPost | null>;
}

async function getAll(): Promise<IPost[]> {
  try {
    const result = await axios.get<IPost[]>(`${baseURL}/`);
    return result.data || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function getPost(id: string): Promise<IPost | null> {
  try {
    const result = await axios.get<IPost>(`${baseURL}/${id}`);
    return result.data || null;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    return null;
  }
}

export const postsService: IPostService = {
  getAll,
  getPost,
};
