import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY



export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {

      headers.set('X-RapidAPI-Key', rapidApiKey)
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')

      return headers
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
      query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
})

export const { useLazyGetSummaryQuery } = articleApi

// use axios to fetch data

// import axios from 'axios';

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
// const baseUrl = 'https://article-extractor-and-summarizer.p.rapidapi.com/';

// //
// const axiosInstance = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     'X-RapidAPI-Key': rapidApiKey,
//     'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
//   },
// });

// //
// export const getArticleSummary = async (articleUrl) => {
//   try {
//     const encodedUrl = encodeURIComponent(articleUrl);
//     const response = await axiosInstance.get(`summarize?url=${encodedUrl}&length=3`);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching article summary:', error);
//   }
// };
