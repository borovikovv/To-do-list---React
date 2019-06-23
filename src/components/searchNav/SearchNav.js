import React from 'react';
import './searchNav.css';

const SearchNav = ({allBtn, activeBtn, doneBtn}) => {
    return (
        <div className="btn-group">
            <button
            onClick={ allBtn }
            type="button" className="btn btn-info">
                All
            </button>
            <button 
            onClick={ activeBtn }
            type="button" className="btn btn-outline-secondary">
                Active
            </button>
            <button 
            onClick={ doneBtn }
            type="button" className="btn btn-outline-secondary">
                Done
            </button>
        </div>
    )
}

export default SearchNav;