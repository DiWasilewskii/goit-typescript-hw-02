import axios from "axios";

const API_KEY = "AJYFKwps9TXM4F6C21G6wdo08KW4nAJ-ztU9YG8UpSc";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page) => {
  const response = await axios.get("search/photos", {
    params: {
      client_id: API_KEY,
      query,
      page,
      per_page: 16,
    },
  });

  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};