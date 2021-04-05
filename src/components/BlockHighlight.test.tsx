// import '@testing-library/jest-dom';
import * as React from 'react';
import {render} from '@testing-library/react';

import BlockHighlight from './BlockHighlight';

// type TestA = {
//   x: string
//   y: number
// }

test('renders children', () => {
  const {getByText} = render(<BlockHighlight>Some Text</BlockHighlight>);
  // console.info(getByText);
  // const a: TestA = {
  //   x: 'adf',
  //   y: 1
  // };

  // console.info(a);
  getByText('Some Text');
  // const linkElement = screen.getByText(/children/i);
  // expect(linkElement).toBeInTheDocument();
});
