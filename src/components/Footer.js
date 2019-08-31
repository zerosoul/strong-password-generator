/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  .dls {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    dl {
      display: flex;
      flex-direction: column;
      line-height: 1.4;
      margin: 1rem;
      width: 12rem;
      dt {
        font-size: 1rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 0.4rem;
      }
      dd {
        font-size: 0.8rem;
        color: #fff;
        margin-bottom: 0.4rem;
        padding-left: 0.5rem;
        position: relative;
        ::before {
          content: '-';
          color: #999;
          position: absolute;
          left: 0;
        }
      }
    }
    > i {
      width: 12rem;
      margin: 1rem;
    }
  }
  .copyright {
    font-size: 0.6rem;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    span {
      color: #ccc;
      margin: 0 0.4rem;

      a {
        color: #ddd;
      }
    }
  }
`;
export default function Footer() {
  return (
    <Wrapper>
      <div className="dls">
        <dl>
          <dt>Do you use any of these weak passwords?</dt>
          <dd>Password</dd>
          <dd>123456</dd>
          <dd>Qwerty</dd>
          <dd>Your child's name</dd>
          <dd>always use the same password</dd>
        </dl>
        <dl>
          <dt>Why are those passwords weak?</dt>
          <dd>They're easy to guess or crack. Really easy!</dd>
          <dd>
            If one of your logins is compromised, a hacker then has access to all your services.
          </dd>
        </dl>
        <dl>
          <dt>What's the solution?</dt>
          <dd>Generate and store strong passwords!</dd>
        </dl>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="copyright">
        <span>
          By <a href="//blog.yangerxiao.com">Tristan Yang</a> © 2018
        </span>
        <span>
          Insipied by <a href="//my.norton.com/extspa/idsafe?path=pwd-gen">Password Generator</a>
        </span>
        <span>
          Checkout the source on{' '}
          <a href="//github.com/zerosoul/strong-password-generator">Github</a>
        </span>
      </div>
    </Wrapper>
  );
}
