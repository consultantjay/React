import React from 'react';

export class FormHandle extends React.Component{

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      updateState(e) {
        this.setState({data: e.target.value});
     }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.data);
        event.preventDefault();
    }
   
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value = {this.state.data}  onChange = {this.updateState} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
        <h4>{this.state.data}</h4>
      </form>
        );
    }
}