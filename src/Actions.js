import React from 'react';

function selectMovie(movie) {
    return {
        type: 'SELECT_MOVIE',
        movie: movie
    }
}

export default selectMovie;
