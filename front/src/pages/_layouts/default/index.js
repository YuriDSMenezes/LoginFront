import React from 'react';

import { Wrapper } from './styles';

function defaultLayout({ children }) {
  return <Wrapper>
    {children}
  </Wrapper>
}

export default defaultLayout;