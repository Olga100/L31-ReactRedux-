import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
import store from './Store'
import selectMovie from './Actions';

class MovieThumbnail extends React.Component {

    constructor(props) {
        super(props);

        this.indexMovie = this.indexMovie.bind(this);
    }

    indexMovie (movie) {
        store.dispatch(selectMovie(movie));
    }

    render() {
        const  movie  = this.props.movie;

        return (
            <div className="movie-thumbnail-title" onClick={() => this.indexMovie(this.props.movie)}>
                <div className="title">
                    <small>{ movie.title }</small>
                </div>
                <div className="likes">
                    <span className="thumb"> <i className="fa fa-thumbs-o-up" aria-hidden="true"/></span>
                    <span className="thumb"> <i className="fa fa-thumbs-o-down" aria-hidden="true"/></span>
                    <small>likes</small>
                    <hr/>
                    <small>{movie.likes}</small>
                </div>
                <img className="image" src={movie.posterUrl} alt="poster"/>
                <div className="clear"></div>
                <div className="stars"><Stars stars={movie.stars}/></div>
            </div>);
    }
}


MovieThumbnail.propTypes = {
    movie: PropTypes.object.isRequired,
    handleClick: PropTypes.func
};

export default MovieThumbnail;

