import React, { Component } from 'react';
import Parent from './Parent';
export default class Child extends Component {


  render() {
   
        return (
        <>
        <h1>hello I'm child</h1>
        <button onClick={(e) => this.props.goBack(e)}>return to parent</button>
        </>
        )
   
  }
}
