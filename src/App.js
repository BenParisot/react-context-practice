import React from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <NavBar />
        <MovieList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
