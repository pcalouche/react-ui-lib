import {render} from '@testing-library/react';
import React from 'react';
import App from './App';

it('renders h1', () => {
  const {getByText} = render(<App/>);
  const h1Element = getByText(/React UI Library Demo/i);
  expect(h1Element).toBeInTheDocument();
});
