import React from 'react';
import { Layout, Search } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input } from 'antd';

import GameTile from '../GameTile';

const SearchBox = () => {
    const { Search } = Input;

    return (
        <Search placeholder="Search" onSearch={data => console.log(data)}/>
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

    return (
        <>
            <Layout>
                <Header>
                    <Title>More than 100 games for you!</Title>
                </Header>
                <SearchBox />
                <Content>
                    <Grid>
                        {list ? list.map( game => <GameTile game={game} key={game.extearnal_game_id} />) : ''}
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
