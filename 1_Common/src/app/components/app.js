import React from "react";
import {Todos} from "./todos.component";
 

var todos =[     {id:1,TaskName:"Watch Movies",Description:"Jumanji",Status:"InComplete"},     
 {id:2,TaskName:"Read Book",Description:"Jumanji",Status:"InComplete"},   ];
//var todos = [];

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: []
        }
    }
  


    render() {
        return (
            <div>
                <button onClick={()=>this.handleAddProduct()}> Click Me </button>
                <h1>  Todos </h1>
                <div className="header-bar"></div>
                <div>
                    { <Todos todos={this.state.todos}/> }
                </div>
            </div>
        )
    }
}