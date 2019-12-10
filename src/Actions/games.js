import { GET_GAMES_LIST, GET_FILTERED_GAMES_LIST, OPEN_GAME, CLOSE_GAME } from "./actionTypes";

export const getGamesList = gamesList => ({
    type: GET_GAMES_LIST,
    gamesList,
});

export const getFilteredGamesList = term => ({
    type: GET_FILTERED_GAMES_LIST,
    term,
});

export const openGame = game => ({
    type: OPEN_GAME,
    game,
});

export const closeGame = game => ({
    type: CLOSE_GAME,
});

export const fetchGamesList = () => {
    return async (dispatch, getState) => {
        const res = await fetch(`/list`);
        const gamesList = await res.json();
        dispatch(getGamesList(gamesList));
    };
};
