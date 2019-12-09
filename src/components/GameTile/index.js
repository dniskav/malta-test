import React from 'react';
import PropTypes from 'prop-types';


const GameTile = ({ game = {} }) => {

    return (
        <a href="#">
            <img src={game.icon_2} />
        </a>
    )
};

GameTile.propTypes = {
    game: PropTypes.object,
};

export default GameTile;
