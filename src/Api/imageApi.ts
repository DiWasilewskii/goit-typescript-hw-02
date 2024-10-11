import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID AJYFKwps9TXM4F6C21G6wdo08KW4nAJ-ztU9YG8UpSc",
  },
});


export async function fetchPicturesWithQuery<T>(
  query: string,
  page: number = 1
): Promise<T> {
  const { data } = await instance.get<T>(`/search/photos`, {
    params: {
      query: query,
      orientation: "landscape",
      page,
      per_page: 20,
    },
  });

  return data;
}



