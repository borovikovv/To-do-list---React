import React, { Component } from 'react';
import './AddItem.css';

export default class AddItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label)
        this.setState({
            label: ''
        });
    }

    
    render () {
        return (
            <form   className="add-item d-flex"
                    onSubmit={ this.onSubmit }>
                <input
                        type="text"
                        onChange={ this.onLabelChange }
                        className='form-control add-item-form'
                        placeholder='what needs to be done?'
                        value={this.state.label}>
                </input>
                    <button className="btn btn-outline-secondary">
                        Add item
                    </button>
            </form>
        )
    }
}