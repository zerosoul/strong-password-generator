import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  > h1 {
    font-size: 2rem;
    line-height: 1.2;
    color: #4caf50;
    padding: 2.4rem 0;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    .ribbon {
      /* content: 'online'; */
      color: #4caf50;
      font-size: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
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
      font-weight: 800;
    }
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <h1>
        strong passwords generator <i className="ribbon">online</i>
      </h1>
    </Wrapper>
  );
}
