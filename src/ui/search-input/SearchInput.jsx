import React from "react";

const SearchInput = ({ value, onChange, onClick }) => {
  return (
    <div className="search__container">
      <div className="search__container--search">
        <input
          type="text"
          placeholder="Search"
          onChange={onChange}
          value={value}
        />
        <div className="search__container--action">
          <button onClick={onClick}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
