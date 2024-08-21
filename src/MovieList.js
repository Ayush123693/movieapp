import React, { useState, useEffect } from 'react';
import { getMovies } from '../api';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    const movies = await getMovies(query);
    setMovies(movies);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for movies"
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;