import React, { Component } from 'react';
import Parent from './Parent';
export default class componentName extends Component {

  state = {
      returnToParent: false
  }
  render() {
        return (<h1>hello I'm child</h1> )
  }
}
