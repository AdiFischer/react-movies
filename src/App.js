import Header from './components/Header';
import './App.css';
import MovieList from './components/movieList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <MovieList />
      {/* we will change so */}
      <Footer />
    </div>
  );
}

export default App;
