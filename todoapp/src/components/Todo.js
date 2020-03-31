import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: "",
            time: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }
    handleSubmit(e) {
        
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Task : </label>
                        <input type="text" name="item" className="form-control" value={this.state.item} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Time : </label>
                        <input type="nutextmber" name="time" className="form-control" value={this.state.time} onChange={this.handleChange}/>
                    </div>
                    <p><button type="submit" className="btn btn-primary">Add task</button></p>
                </form>
            
            </div>
        )
    }
}
export default Todo;
