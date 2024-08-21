import React from 'react';

const FilterOptions = () => {
  return (
    <div>
      <label>Genre:</label>
      <select aria-label="Genre">
        <option value="">All</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Thriller">Thriller</option> 
        </select>
      <label>Release Year:</label>
      <input type="range" min="1900" max="2022" aria-label="Release Year" />
      <label>Rating:</label>
      <input type="range" min="1" max="10" aria-label="Rating" />
    </div>
  );
};

export default FilterOptions;