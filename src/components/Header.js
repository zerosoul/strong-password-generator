import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/icon.png';
const Wrapper = styled.header`
  position: relative;
  overflow: hidden;
  /* background: #4b706a; */
  .logo {
    width: 6rem;
    margin: 0 auto;
    display: block;
    margin-top: 1rem;
    border-radius: 50%;
    box-shadow: -1px 8px 20px 0px #2c2d2d;
  }
  > h1 {
    font-size: 2rem;
    line-height: 1.2;
    color: #fff;
    padding: 2.4rem 0;
    padding-top: 1.4rem;
    text-align: center;
    font-weight: 800;
    text-transform: uppercase;
    text-shadow: 0 0 6px #9e9e9e;
  }
  .ribbon-wrapper {
    width: 94px;
    height: 88px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    .ribbon {
      text-align: center;
      position: relative;
      padding: 8px 0;
      transform: rotate(-45deg);
      font-size: 0.6rem;
      font-weight: 800;
      top: 15px;
      left: -30px;
      width: 120px;
      background-color: #318800;
      color: #fff;
      box-shadow: 1px 1px 14px 0px #174007;
    }
  }
`;
export default function Header() {
  return (
    <Wrapper>
      <img className="logo" src={Logo} alt="logo" />
      <h1>strong passwords generator</h1>
      <div className="ribbon-wrapper">
        <div className="ribbon">ONLINE</div>
      </div>
    </Wrapper>
  );
}
