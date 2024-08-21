import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: 'YOUR_API_KEY', // replace with your own API key
  },
});

const getMovies = async (query = '', page = 1) => {
  const response = await api.get(`s?${query}&page=${page}`);
  return response.data;
};

const getMovieDetails = async (imdbId) => {
  const response = await api.get(`i?i=${imdbId}&plot=full`);
  return response.data;
};

export { getMovies, getMovieDetails };