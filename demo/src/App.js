import React, {Component} from 'react';

import {Header, MiStateSeal} from '@pcalouche/react-ui-lib';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header name={'Philip'}/>
        <img src={MiStateSeal} alt='MI Gov Home' height='20' width='20'/>
      </div>
    );
  }
}

export default App;
