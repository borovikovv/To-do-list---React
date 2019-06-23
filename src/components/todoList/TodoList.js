import React from 'react';
import TodoListItem from './todoListItem/TodoListItem';
import './todoList.css';

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {

    const elements = todos.map((item) => {
        
        const {id, ...itemProps} = item;

        return(
            <li className="list-group-item" key={id}> <TodoListItem 
                {... itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleImportant={ () => onToggleImportant(id) }
                onToggleDone={ () => onToggleDone(id) }
            /> </li>
        )
    });

    return(
        <ul className="list-group">
            { elements }
        </ul>
    );
}

export default TodoList;