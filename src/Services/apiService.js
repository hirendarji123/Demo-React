import axios from "axios";
console.log(process.env.REACT_APP_API_KEY);
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const pageSize = 9;
export const fetchPosts = async (page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/everything?q=technology&pageSize=${pageSize}&page=${page}&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return { articles: [] };
  }
};

export const fetchPostDetails = async (title) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/everything?qInTitle=${title}&apiKey=${API_KEY}`
    );
    return response.data.articles[0];
  } catch (error) {
    console.error("Error fetching post details:", error);
    return null;
  }
};
