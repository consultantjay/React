import React from 'react';
//React events are named using camelCase, rather than lowercase.
//With JSX you pass a function as the event handler, rather than a string.
export class EventHandle extends React.Component{
    constructor(props) {
        super(props);
       
       
        this.updateState = this.updateState.bind(this);
        this.state = {isToggleOn: true};

        this.state = {         data: 'Initial data...'      }
        
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    
    }
     
        handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
     };
     updateState() {
        this.setState({data: 'Data updated...'})
     }
    
     
     render() {
        return (
            <div  >
           <div>
              <button onClick = {this.updateState}>CLICK</button>
              <h4>{this.state.data}</h4>
           </div>
           
           <div>
           <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
          
           </div>
           
        </div>
        );
     }
}