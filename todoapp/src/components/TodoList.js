import React, { Component } from 'react';
import uuid from 'react-uuid';
import DisplayList from './DisplayList';
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           todoList: []
        };
    }
    addToTodoList = (task) => {
        //console.log("from todo",task);
       
        let newList = [...this.state.todoList,task];
        this.setState({
            todoList: newList
        });
        console.log("newTodolist",this.state);
    };
    render() {
        const {todoList} = this.state;
        let todolist = todoList.length ? (todoList.map((list) => (
            <DisplayList key={uuid()} todoitem={list} />
        ))) : <p className="center">There is nothing in the list !</p>
        return(
            <div className="row ml-3 mt-3">
                <Todo todoaddfunction={this.addToTodoList}/>
                <h3 className="mb-4">ToDo List</h3>
                <div className="container mb-4">
                    <ul className="list-group">
                        {todolist}
                    </ul>
                </div>
                
            </div>
        )
    }
}
export default TodoList;
