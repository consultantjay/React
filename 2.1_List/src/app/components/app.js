import React from "react";
import {Todos} from "./todos.component";

import axios from "axios";


var todos = [];

export class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [{id:1,TaskName:"Watch  Movies",Description:"Jumanji",Status:"InComplete"}, 
            {id:2,TaskName:"Read Book",Description:"Jumanji",Status:"InComplete"} ]
        }
    }

    


    render() {
        return (
            <div>
                
                <h1>  Todos </h1>
                <div className="header-bar"></div>
                <div>
                    { <Todos todos={this.state.todos}/> }
                </div>
            </div>
        )
    }
}