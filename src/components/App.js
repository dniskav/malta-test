import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GameGrid from './GameGrid';

const AppWrapper = styled.div`
    max-width: 920px;
    display: flex;
    margin: 0 auto;
    box-shadow: 0px 0px 25px -10px #000;
`;

const App = () => {
    const [gameslist, setGamesList] = useState([]);

    useEffect(() => {
        fetch('/list')
            .then(res => res.json())
            .then( json => setGamesList(json))
            .catch( err => console.warn(err));
    }, []);
    return (
        <AppWrapper>
            <GameGrid list={gameslist} />
        </AppWrapper>
    )
};

export default App;
