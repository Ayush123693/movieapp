import React, { useState, useEffect } from 'react';

const FavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favoriteMoviesFromStorage = localStorage.getItem('favorite-movies');
    if (favoriteMoviesFromStorage) {
      setFavoriteMovies(JSON.parse(favoriteMoviesFromStorage));
    }
  }, []);

  const handleFavoriteClick = (movie) => {
    const newFavoriteMovies = favoriteMovies.includes(movie)
      ? favoriteMovies.filter((m) => m !== movie)
      : [...favoriteMovies, movie];

    setFavoriteMovies(newFavoriteMovies);
    localStorage.setItem('favorite-movies', JSON.stringify(newFavoriteMovies));
  };

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.imdbID} onClick={() => handleFavoriteClick(movie)}>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteMovies;