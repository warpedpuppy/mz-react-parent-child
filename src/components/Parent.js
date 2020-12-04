import React, { Component } from 'react';
import Child from './Child';
export default class componentName extends Component {

  state = {
      seeChild: false,
      random:  Math.floor(Math.random() * 1000)
  }
  render() {
    if ( this.state.seeChild ) {
        return <Child />
    }  else {
        return (
        <div> 
        <h1>{ this.state.random }</h1> 
        <button onClick={() => this.setState({seeChild: true})}>see child</button>
        </div>
     );
    }
    
  }
}
