import React, { Component } from 'react';
import uuid from 'react-uuid';
import DisplayList from './DisplayList';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           todoList: [
               {item: "wakeup",time: "7.00 am"},
               {item: "read newspaper",time: "7.30 am"}
            ]
        }
    }
    render() {
        const {todoList} = this.state;
        let todolist = todoList.map((list) => (
            <DisplayList key={uuid()} todoitem={list} />
        ))
        return(
            <div className="row ml-3 mt-3">
                <h3 className="mb-4">ToDo List</h3>
                <div className="container">
                    <ul className="list-group">
                        {todolist}
                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList;
