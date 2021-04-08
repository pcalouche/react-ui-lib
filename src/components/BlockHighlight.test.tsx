import * as React from 'react';
import {render} from '@testing-library/react';

import BlockHighlight from './BlockHighlight';

test('renders children', () => {
  const {getByText} = render(<BlockHighlight>Some Text</BlockHighlight>);

  const node = getByText('Some Text');
  expect(node).toHaveClass('BlockHighlight');
});
