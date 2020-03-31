import React from 'react';

class Displaylist extends React.Component {
   
    render() {
        return(
            <li className="list-group-item">{this.props.todoitem.item} : {this.props.todoitem.time}</li>
        )
    }
}
export default Displaylist;
