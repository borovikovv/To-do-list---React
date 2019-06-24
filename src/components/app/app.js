import React, {Component} from 'react';
import Header from '../header/Header';
import SearchList from '../searchList/SearchList';
import SearchNav from '../searchNav/SearchNav';
import TodoList from '../todoList/TodoList';
import AddItem from '../AddItem/AddItem';


export default class App extends Component {

    newId = 100;

    state = {
        todoData: [
            this.createItem("React App"),
            this.createItem("Test task"),
            this.createItem("Test task")
        ],

        term: '',
        filter: 'all'
    };

    createItem(label) {
        return {
            label,
            importantItem: false,
            done: false,
            id: this.newId++
        }
    };

    deletedItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            };
        });
    }
    addItem = (text) => {
        const newItem = this.createItem(text);

        this.setState(({todoData}) => {
            const newItemArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newItemArray
            }
        })
    }

    onToggle(arr, id, itemProps) {
        const idx = arr.findIndex((el) => el.id === id);
        
        const oldItem = arr[idx];
        const newItem = { ...oldItem,
            [itemProps]: !oldItem[itemProps]
        }
        
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggle(todoData, id, 'importantItem'),
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.onToggle(todoData, id, 'done')
            }
        });
    }


    onSearchLabel = (items, term) => {
        if(term.length === 0) {
            return items;
        }
        return  items.filter((item) => {
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onNavFilter = (items, filter) => {
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default: 
            return items;
        }
    }


    onSearchChange = (term) => {
        this.setState({term})
    }

    onNavChange = (filter) => {
        this.setState({filter})
    }

    render() {

        const { todoData, term, filter } = this.state
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;
        const actualTerm = this.onNavFilter(this.onSearchLabel(todoData, term), filter);

        return(
            <div>
                <Header 
                    todo={todoCount} 
                    done={doneCount} />
                <SearchList 
                    onSearchChange={ this.onSearchChange } />
                <SearchNav 
                    onNavChange={ this.onNavChange }
                    filter={filter} />
                <TodoList 
                    todos = { actualTerm }
                    onDeleted={ this.deletedItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <AddItem 
                    addItem={ this.addItem }/>
            </div>
        )
    }
}