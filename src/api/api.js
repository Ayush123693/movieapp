import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; 

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: API_KEY,
  },
});

const getMovies = async () => {
  const response = await api.get('s?');
  return response.data;
};

const searchMovies = async (query) => {
  const response = await api.get('s', { params: { s: query } });
  return response.data;
};

const getMovieDetails = async (imdbID) => {
  const response = await api.get(`i/${imdbID}`);
  return response.data;
};

export { getMovies, searchMovies, getMovieDetails };