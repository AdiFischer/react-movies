import Header from './components/Header';
import './App.css';
import MovieList from './components/movieList';
import Footer from './components/Footer';
import MovieComponent from './components/MovieComponent';

function App() {

  const movieInfo = {
    id: "1",
    posterURL: "https://bocacode.com/assets/images/bc-logos/boca-code-rgb-logo-tag-reversed.png",
    title: "Boca Code the Movie"
  }
  return (
    <div className="App">
      <Header /> 
      <MovieComponent movieProp={movieInfo} />
      <MovieList />
      {/* we will change so */}
      <Footer />
    </div>
  );
}

export default App;
