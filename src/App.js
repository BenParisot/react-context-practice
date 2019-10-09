import React from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';

function App() {
  // const [color, toggleTheme] = useState(buttonThemes.blue);

  return (
    <div className="app">
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
