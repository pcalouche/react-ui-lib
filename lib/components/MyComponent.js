import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'reactstrap';

import {MiStateSeal} from '../images';

const Header = props => {
  return (
    <div className='Header'>
      <h1 className={'text-muted'}>Hello {props.name}!</h1>
      <Alert color='primary'>
        This is a primary alert — check it out!
      </Alert>
      <img src={MiStateSeal} alt='MI Gov Home' height='100' width='100'/>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired
};

export default Header;
