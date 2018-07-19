
import React from "react";
import { Todo } from "./todo.component";
export class Todos extends React.Component{
    render(){
        return(
            <div>
               <ul className="todos">
                {this.props.todos.map((todo)=> <Todo key={todo.id} todo={todo} /> )}
              </ul>
             
            </div>
        )
    }
}