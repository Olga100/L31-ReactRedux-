import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieThumbnail from './MovieThumbnail';
import Input from './Input';

class MovieList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        };

        this.filterItems = this.filterItems.bind(this);
        this.filterForRender = this.filterForRender.bind(this);
    }

    filterItems(filter) {
        this.setState({filter: filter});
    }

    filterForRender (movies) {
        let items=[];
        let filter = this.state.filter;

        if(!filter) {
            items = movies;
        } else {
            filter = filter.toLocaleLowerCase();
            items = movies.filter(function (item) {
                return item.title.toLocaleLowerCase().indexOf(filter) >= 0;
            });
        }

        return items;
    };

    renderItems(movies) {
        let x = this.filterForRender(movies);

        return x.map(function (item) {
            return (<MovieThumbnail movie={item}/>);
        });
    }

    render() {
        return (
            <div className="leftPart">
                <div className="FieldSortSearch">
                    <p>Sort movies</p>
                    <div>
                        <div className="sortByLikies">
                            <small> by likies</small>
                        </div>
                        <div className="sortByRating">
                            <small> by rating</small>
                        </div>
                    </div>
                    <Input onFilter={this.filterItems}/>
                </div>

                { this.renderItems(this.props.movies) }
            </div>);
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
};

export default  MovieList;

