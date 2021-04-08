import * as React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ClickCounter from './ClickCounter';

test('it renders', () => {
  const {getByText} = render(<ClickCounter/>);
  let button = getByText('Click Count: 0');
  expect(button).toBeInTheDocument();
  expect(button.tagName.toLowerCase()).toBe('button');
  expect(button).toHaveClass('ClickCounter');
  userEvent.click(button);
  button = getByText('Click Count: 1');
  expect(button).toBeInTheDocument();
});
