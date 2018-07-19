import React from "react";

export class Todo extends React.Component {
    render() {
        return (
            <li> <div className="todo-element">
                    <div className="badge">
                        {this.props.todo.id}
                    </div>
                    <div className="name">
                        {this.props.todo.TaskName}
                    </div>
                    <div className="saying">
                        {this.props.todo.Description}
                    </div>
                </div>
            </li>
        )
    }
}