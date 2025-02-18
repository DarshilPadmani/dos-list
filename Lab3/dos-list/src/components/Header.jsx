import React from "react";

const Header = (props) => {
    return (
        <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-4 shadow-md">
            <h1 className="text-2xl font-bold">My To-Do App 🚀</h1>
            <input
                type="text"
                placeholder="Search..."
                value={props.searchValue}
                onChange={props.onSearchChange}
                className="mt-2 p-2 rounded"
            />
        </header>
    );
};

export default Header;