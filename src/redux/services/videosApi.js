import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://youtube-v31.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  endpoints: (builder) => ({
    getVideosByCategory: builder.query({
      query: (category) => `/search?part=snippet&q=${category}&maxResults=50`,
    }),
    getChannelDetail: builder.query({
      query: (id) => `/channels?part=snippet&id=${id}`,
    }),
    getChannelVideos: builder.query({
      query: (id) =>
        `/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
    }),
    getVideoDetail: builder.query({
      query: (id) => `/videos?part=snippet,statistics&id=${id}`,
    }),
    getVideosById: builder.query({
      query: (id) => `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=50`,
    }),
  }),
});

export const {
  useGetVideosByCategoryQuery,
  useGetChannelDetailQuery,
  useGetChannelVideosQuery,
  useGetVideoDetailQuery,
  useGetVideosByIdQuery
} = videosApi;
