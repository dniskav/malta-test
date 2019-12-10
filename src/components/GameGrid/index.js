import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Input } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GameTile from '../GameTile';
import { fetchGamesList, getFilteredGamesList } from '../../Actions/games';

const SearchBox = () => {
    const { Search } = Input;
    const dispatch = useDispatch();

    return (
        <Search
            placeholder="Search"
            onChange={event => dispatch(getFilteredGamesList(event.target.value))}
            onSearch={data => dispatch(getFilteredGamesList(data))}
        />
    );
}

const Grid = styled.div`
    display: grid;
    margin: 5px 0;
    grid-template-columns: repeat(4, 25%);
    grid-row-gap: 10px;
    align-items: baseline;
    justify-items: center;
`;

const Title = styled.h1`
    color: white;
    text-align: center;
`;

const GameGrid = ({ list }) => {
    const { Header, Footer, Content } = Layout;
    const gamesList = useSelector( state => state.gamesList);
    const filteredGamesList = useSelector( state => state.filteredGamesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGamesList());
    }, [])
    return (
        <>
            <Layout>
                <Header>
                    <Title>More than 100 games for you!</Title>
                </Header>
                <SearchBox />
                <Content>
                    <Grid>
                        {
                            filteredGamesList.length ?
                                filteredGamesList.map( game => <GameTile game={game} key={game.extearnal_game_id} />) 
                                :
                                gamesList.map( game => <GameTile game={game} key={game.extearnal_game_id} />) 
                        }
                    </Grid>
                </Content>
                <Footer>
                    <h3>Malta Games</h3>
                </Footer>
            </Layout>
        </>
    );
};

GameGrid.propTypes = {
    list: PropTypes.array,
}

export default GameGrid;
