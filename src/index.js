import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/movies" onClick={() => console.log("Home clicked")}>Home</a></li>
            <li><a href="/favorites" onClick={() => console.log("Favorites clicked")}>Favorites</a></li>
          </ul>
        </nav>
      </header>
      <App />
    </div>
  </React.StrictMode>
);


reportWebVitals();