import React from 'react';
import {Alert} from 'reactstrap';

import {testImage} from '../images';

type Props = {
  name: string
}

const MyComponent: React.FC<Props> = (props: Props) => {
  return (
    <div className="MyComponent">
      <h3 className={'text-muted'}>Hello {props.name}!</h3>
      <Alert color="primary">
        This is a primary alert using Reactstrap — check it out!
      </Alert>
      <img src={testImage} alt="Test image" height="50" width="50"/>
    </div>
  );
};

export default MyComponent;