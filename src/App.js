import React, {Component} from 'react';
import './App.css';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import MainHeader from './MainHeader';
import movies from './movies.json';
import {connect, Provider} from 'react-redux';
import {selectMovie} from './Actions';
import store from './Store'

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentMovie = store.getState();

        return (
            <div className="App">

                <MainHeader/>

                <div className="header"><h2>Movies</h2></div>

                <div id="movie-list-container">
                    <MovieList movies={movies.movies}/>
                </div>

                <div id="movie-details-container">
                    <MovieDetails movie={currentMovie}/>
                </div>

                <div className="clear"></div>

                <div className="footer"><h2> EPAM</h2></div>
            </div>
        );
    }
}

export default App;


