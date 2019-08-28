import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  font-size: 42px;
  line-height: 1.2;
  letter-spacing: -1.5px;
  color: #333333;
  margin-top: 120px;
  margin-bottom: 40px;
`;
export default function Header() {
  return <Wrapper>Create strong passwords online</Wrapper>;
}
