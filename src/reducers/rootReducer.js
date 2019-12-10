import { initialState } from "./initialState";
import {
    GET_GAMES_LIST,
    GET_FILTERED_GAMES_LIST,
    OPEN_GAME,
    CLOSE_GAME,
} from "../Actions/actionTypes";

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_GAME:
            const { game } = action;
            return { ...state, game };
        case CLOSE_GAME:
            return { ...state, game: {} };
        case GET_GAMES_LIST:
            const { gamesList } = action;
            return { ...state, gamesList };
        case GET_FILTERED_GAMES_LIST:
            const { term } = action;
            return {
                ...state,
                searchBy: term,
                filteredGamesList: filterGames(term, state.gamesList),
            };
        default:
            return state;
    }
};

const filterGames = (term, list) => {
    return list.filter(game => {
        return game.name.toLowerCase().includes(term.toLowerCase());
    });
};
