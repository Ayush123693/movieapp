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
            <li><a href="#" onClick={() => console.log("Home clicked")}>Home</a></li>
            <li><a href="#" onClick={() => console.log("Favorites clicked")}>Favorites</a></li>
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