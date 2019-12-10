import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Empty, Modal } from "antd";
import styled from "styled-components";

import GameTile from "../GameTile";
import { fetchGamesList, closeGame } from "../../Actions/games";
import SearchBox from "../SearchBox";

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

const GameGrid = () => {
    const { Header, Footer, Content } = Layout;
    const gamesList = useSelector(state => state.gamesList);
    const game = useSelector(state => state.game);
    const searchBy = useSelector(state => state.searchBy);
    const filteredGamesList = useSelector(state => state.filteredGamesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGamesList());
    }, []);
    const list = !!searchBy ? filteredGamesList : gamesList;
    return (
        <>
            <Layout>
                <Header>
                    <Title>{list.length} games for you!</Title>
                </Header>
                <SearchBox />
                <Content>
                    {!!searchBy && !filteredGamesList.length ? (
                        <Empty />
                    ) : (
                        <Grid>
                            {list.map(game => (
                                <GameTile
                                    game={game}
                                    key={game.extearnal_game_id}
                                />
                            ))}
                        </Grid>
                    )}
                </Content>
                <Footer>
                    <h3>Malta Games</h3>
                </Footer>
            </Layout>

            <Modal
                title={game.name}
                visible={game.id > 0}
                centered
                onCancel={() => dispatch(closeGame())}
                footer={null}
                width="770px"
            >
                <img src={game.background} style={{ width: "720px" }} />
            </Modal>
        </>
    );
};

export default GameGrid;
