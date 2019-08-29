import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  font-size: 2rem;
  line-height: 1.2;
  color: #4caf50;
  padding: 2.4rem 0;
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  :after {
    content: 'online';
    font-size: 0.5rem;
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    position: absolute;
    top: 20px;
    border-radius: 50%;
    right: 54px;
    padding: 0.4rem;
    justify-content: center;
    align-items: center;
    transform: rotate(25deg);
    background: rgba(255, 255, 255, 0.8);
  }
`;
export default function Header() {
  return <Wrapper>strong passwords generator</Wrapper>;
}
