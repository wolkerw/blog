import axios from "axios";

const baseURL = "https://tech-test-backend.dwsbrazil.io/posts";

async function getAll() {
  const result = await axios.get(`${baseURL}/`);
  return result.data || [];
}

async function getPost(id) {
  const result = await axios.get(`${baseURL}/${id}`);
  return result.data || [];
}

export const postsService = {
  getAll,
  getPost,
};
