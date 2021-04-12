import React from 'react';
import styled from 'styled-components';

import { StyledLib } from '@ssr-mismatch-on-lib/styled-lib';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <StyledLib />
    </StyledPage>
  );
}

export default Index;
