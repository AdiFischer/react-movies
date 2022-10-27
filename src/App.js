import Header from './components/Header';
import MovieList from './components/movieList';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
