import React from 'react';

import {BlockHighlight, ClickCounter, testImage} from '@pcalouche/react-ui-lib';

const App = () => {
  return (
    <div className="App">
      <div style={{textAlign: 'center'}}>
        <h1>React UI Library Demo</h1>
        <BlockHighlight>BlockHighlight component whose styles are imported directly into the component.</BlockHighlight>
        <h3>
          Using the ClickCounter component from the library. We have overridden <code>$buttonColor</code> in this
          app's <code>index.scss</code>.
        </h3>
        <div>
          <ClickCounter/>
        </div>
        <h3>Demonstrates how to use an image found the UI library.</h3>
        <img src={testImage} alt="Test" width="10%"/>
      </div>
    </div>
  );
};

export default App;
