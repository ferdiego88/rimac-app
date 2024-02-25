import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Ripple from './index';

describe('Ripple', () => {
  it('Render default ripple', () => {
    const { container } = render(<Ripple />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('Render disabled ripple', () => {
    const { container } = render(<Ripple disabled />);
    expect(container.querySelector('.ripple')).toBeInTheDocument();
  });
});
