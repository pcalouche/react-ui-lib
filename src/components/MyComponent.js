import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';

import {testImage} from '../images';

const MyComponent = props => {
  return (
    <div className='MyComponent'>
      <h3 className={'text-muted'}>Hello {props.name}!</h3>
      <Alert color='primary'>
        This is a primary alert using Reactstrap — check it out!
      </Alert>
      <img src={testImage} alt='Test image' height='50' width='50'/>
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default MyComponent;