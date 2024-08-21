/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import FavoriteMovies from './FavoriteMovies';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a onClick={() => console.log("Home clicked")}>Home</a></li>
            <li><a onClick={() => console.log("Favorites clicked")}>Favorites</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <SearchBar />
        <FilterOptions />
        <MovieList />
        <FavoriteMovies />
      </main>
    </div>
  );
};

export default App;