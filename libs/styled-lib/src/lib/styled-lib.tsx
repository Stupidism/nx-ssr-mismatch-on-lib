import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StyledLibProps {}

const StyledStyledLib = styled.div`
  color: pink;
`;

export function StyledLib(props: StyledLibProps) {
  return (
    <StyledStyledLib>
      <h1>Welcome to styled-lib!</h1>
    </StyledStyledLib>
  );
}

export default StyledLib;
