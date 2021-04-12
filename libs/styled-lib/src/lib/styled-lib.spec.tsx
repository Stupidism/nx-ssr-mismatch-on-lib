import React from 'react';
import { render } from '@testing-library/react';

import StyledLib from './styled-lib';

describe('StyledLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyledLib />);
    expect(baseElement).toBeTruthy();
  });
});
