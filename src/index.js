import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.example.com/movies?query=${query}`);
      const movies = await response.json();
      setMovies(movies);
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/movies" onClick={() => console.log("Home clicked")}>Home</a></li>
            <li><a href="/favorites" onClick={() => console.log("Favorites clicked")}>Favorites</a></li>
          </ul>
        </nav>
      </header>
      <MovieListContainer movies={movies} query={query} onChangeQuery={setQuery} />
    </div>
  );
};

const MovieListContainer = ({ movies, query, onChangeQuery }) => {
  return (
    <main>
      <input
        type="search"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
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
    </main>
  );
};

root.render(
  <React.StrictMode>
    <MovieList />
  </React.StrictMode>
);

// eslint-disable-next-line no-undef
reportWebVitals();