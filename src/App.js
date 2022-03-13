import {useState, useEffect} from 'react';
import './App.css'
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'

//API key = be667b1
const API_URL = 'https://www.omdbapi.com?apikey=be667b1';

const movie1 = {
    "Title": "The Avengers",
    "Year": "2012",
    "imdbID": "tt0848228",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers');
    }, []);

    return(
        <div className="app">
            <h1>Movie & Chill</h1>
            <div className="search">
                <input 
                    placeholder='search movies'
                    value={SearchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                    src={SearchIcon}
                    alt='search'
                    onClick={() => searchMovies(SearchTerm)}
                />

            </div>
            <div className='container'>
                {/* <MovieCard movie1={movies[1]}/> */}
                {movies.map((movie) => (
                    <MovieCard movie1={movie}/>
                ))}
            </div>
        </div>
    );
}

export default App;