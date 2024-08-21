import React, { useState, useEffect } from 'react';
import { getMovies } from '../api';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handleSearch = async (query) => {
    setQuery(query);
    const movies = await getMovies(query);
    setMovies(movies);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies(query, page);
      setMovies(movies);
    };
    fetchMovies();
  }, [query, page]);

  const handleScroll = () => {
    setPage((page) => page + 1);
  };

  return (
    <div>
      <input
        type="search"
        value={query}
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
      <button onClick={handleScroll}>Load more</button>
    </div>
  );
};

export default SearchBar;