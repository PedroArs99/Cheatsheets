import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header style={HeaderStyle}>
            <h1>To Do List</h1>
            <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link>
        </header>
    );
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
