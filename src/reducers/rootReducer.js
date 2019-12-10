import { initialState } from './initialState';
import { GET_GAMES_LIST, GET_FILTERED_GAMES_LIST } from '../Actions/actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES_LIST:
            const { gamesList } = action;
            return {...state, gamesList};
        case GET_FILTERED_GAMES_LIST:
            const { term } = action;
            return {...state, filteredGamesList: filterGames(term, state.gamesList)};
        default:
            return state;
    }
};

const filterGames = (term, list) => {
    return list.filter( game => {
        return game.name.toLowerCase().includes(term.toLowerCase());
    });
};
