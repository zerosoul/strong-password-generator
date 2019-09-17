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
  .lang {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.8);
    padding: 0.2rem;
    padding-bottom: 0.3rem;
    select {
      font-size: 0.8rem;
      font-weight: bold;
      text-align-last: center;
    }
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
export default function Header({ title, langName, changeLang }) {
  const handleLangChange = ({ target: { value } }) => {
    console.log('wwww', value);
    changeLang(value);
  };
  return (
    <Wrapper>
      <img className="logo" src={Logo} alt="logo" />
      <h1>{title}</h1>
      <div className="ribbon-wrapper">
        <div className="ribbon">ONLINE</div>
      </div>
      <div className="lang">
        <select value={langName} onChange={handleLangChange}>
          {[{ value: 'en', title: 'English' }, { value: 'zh', title: '中文' }].map(item => {
            return (
              <option key={item.value} value={item.value}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
}
