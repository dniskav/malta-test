import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { openGame } from "../../Actions/games";

const GameTile = ({ game = {} }) => {
    const dispatch = useDispatch();
    return (
        <a href="#" onClick={() => dispatch(openGame(game))}>
            <span>{game.name}</span>
            <img src={game.icon_2} />
        </a>
    );
};

GameTile.propTypes = {
    game: PropTypes.object,
};

export default GameTile;
