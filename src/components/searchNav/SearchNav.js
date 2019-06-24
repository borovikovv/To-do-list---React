import React, { Component } from 'react';
import './searchNav.css';

export default class SearchNav extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
        ]

    render() {

        const { filter, onNavChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const onActive = filter === name;
            const clazz = onActive ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={ () => onNavChange(name) }
                    >
                    { label }
                </button>
            )
        });
        return ( 
            <div className="btn-group">
                { buttons }
            </div>
        )
    }
}