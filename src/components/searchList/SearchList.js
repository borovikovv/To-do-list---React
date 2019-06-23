import React, { Component } from 'react';
import './searchList.css';

export default class SearchList extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        return(
            <input
                type="text"
                onChange={ this.onSearchChange }
                placeholder = 'type to search'
                value={this.state.term} />
        )
    }
}