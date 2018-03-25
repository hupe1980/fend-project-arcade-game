import React from 'react';
import styled from 'styled-components';

import { Label } from './common';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: blue;
  color: white;
  padding: 10px;
`;

function Footer() {
  return (
    <Container>
      <Label>{`2018 by hupe`}</Label>
    </Container>
  );
}

export default Footer;
