import React from 'react';
import './header.css';

const Header = ({todo, done}) => {
    return(
        <div className="header">
            <div className="header-one">
                <h1>Todo List</h1>
            </div>
            <div className="header-two">
                <h2> to do {todo}, done {done} </h2>
            </div>
        </div>
    )
};

export default Header;