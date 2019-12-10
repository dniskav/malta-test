import React from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import { getFilteredGamesList } from "../../Actions/games";

const SearchBox = () => {
    const { Search } = Input;
    const dispatch = useDispatch();

    return (
        <>
            <Search
                placeholder="Search"
                onChange={event =>
                    dispatch(getFilteredGamesList(event.target.value))
                }
                onSearch={data => dispatch(getFilteredGamesList(data))}
            />
        </>
    );
};

export default SearchBox;
