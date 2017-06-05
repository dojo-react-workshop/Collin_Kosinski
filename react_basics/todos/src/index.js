import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

class ToDoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: input.value,
        };
    }
    render() {
        return (
            <div class="todoapp">
                <input type="text" placeholder="What needs to be done?" value="4"/>
                <List />
            </div>
        )
    }

}

const List = () => {
    return (
        <div>
            <ListItem />
        </div>
    )
}

const ListItem = () => {
    return (
        <div class="new-todo">

        </div>
    )
}

const Filters = () => {
    return null
}
ReactDOM.render(<ToDoApp />, document.getElementById('root'));

