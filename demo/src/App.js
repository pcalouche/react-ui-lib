import React, {Component} from 'react';

import {MyComponent, testImage} from '@pcalouche/react-ui-lib';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>React UI Library Demo</h1>
        <MyComponent name={'Philip'}/>
        <h4>Referencing an image from the UI library directly</h4>
        <img src={testImage} alt='Test' height='500' width='500'/>
      </div>
    );
  }
}

export default App;
