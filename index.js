import React, { Component } from 'react';
import { render } from 'react-dom';
import ExCSS from './ExCSS';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <ExCSS />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
