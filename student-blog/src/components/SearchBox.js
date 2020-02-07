import React from 'react';

const SearchBox = ({ search, updateSearch }) => {
    return (
        <div className="search">
            <input type="text" value={search} onChange={updateSearch} placeholder="Find Students" />
        </div>
    )
}

export default SearchBox;