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
      <div className="lang">
        <select value={langName} onChange={handleLangChange}>
          {[
            { value: 'en', title: 'English' },
            { value: 'zh', title: '中文' }
          ].map((item) => {
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
