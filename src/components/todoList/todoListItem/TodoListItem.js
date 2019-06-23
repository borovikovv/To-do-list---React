import React from 'react';
import './todoListItem.css';

const TodoListItem = ({ done, importantItem, label, onDeleted, onToggleImportant, onToggleDone }) => {

    let classNames = 'todo-list-item';
    if(done) {
        classNames += ' done';
    }
    if(importantItem) {
        classNames += ' importantItem';
    }

    return (
        <span className={classNames}>
            <span
            className="todo-list-items-label"
            onClick = { onToggleDone } >
                { label }
            </span>
            <button
            type="button" 
            onClick = { onDeleted }
            className="btn-item btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o"></i>
            </button>
            <button type="button"  
            onClick = { onToggleImportant }
            className="btn-item btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation"></i>
            </button>
        </span>
    )
}

export default TodoListItem;