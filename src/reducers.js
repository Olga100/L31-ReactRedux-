import React from 'react';

export function movieReducer(state = {}, action) {
    switch (action.type) {
        case 'SELECT_MOVIE':
            return Object.assign({}, action.movie);

        default:
            return state;
    }
}










