import React from 'react';

import { Wrapper } from './styles';

function authLayout({ children }) {
  return <Wrapper>
    {children}
  </Wrapper>
}

export default authLayout;