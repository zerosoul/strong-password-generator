import React, { useState } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import { RefreshIcon, CopyIcon } from './components/Icons';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: #318800;
  padding: 2rem 4rem;
  transition: background 0.5s;
  &.alert {
    background: #c81a00;
  }
  &.warning {
    background: #f9622f;
  }
  &.strong {
    background: #339933;
  }
  .pwd {
    border-bottom: 2px solid #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .output {
      color: #fff;
      font-size: 1.8rem;
      padding: 0.3rem 0;
      word-break: break-all;
    }
    .btns {
      color: #ddd;
      display: flex;
      .btn {
        padding: 0.2rem 0.4rem;
        border: none;
        background: none;
        cursor: pointer;
      }
    }
  }
  .tip {
    padding-left: 1rem;
    position: relative;
    color: #fff;
    font-size: 0.8rem;
    &:before {
      content: '!';
      position: absolute;
      left: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.7rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: rgba(22, 22, 22, 0.4);
    }
    &.bad:before,
    &.warning:before {
      content: '!';
    }
    &.strong:before {
      content: 'ヘ';
      transform: rotateX(180deg);
    }
  }
`;

const Output = ({ pwd, updatePwd, length }) => {
  const [copied, setCopied] = useState(false);
  const [updated, setUpdated] = useState(false);
  const handleUpdateClick = () => {
    if (updated) return;
    setUpdated(true);
    updatePwd();
    setTimeout(() => {
      setUpdated(false);
    }, 500);
  };
  const handleCopyClick = () => {
    if (copied) return;
    copy(pwd);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <StyledWrapper
      className={length < 6 ? 'alert' : length < 11 ? 'warning' : length < 15 ? 'strong' : null}
    >
      <div className="pwd">
        <p className="output">{pwd}</p>
        <div className="btns">
          <button onClick={handleUpdateClick} className="btn update">
            <RefreshIcon color={updated ? '#ddd' : '#fff'} />
          </button>
          <button onClick={handleCopyClick} className="btn copy">
            <CopyIcon color={copied ? '#ddd' : '#fff'} />
          </button>
        </div>
      </div>
      {length < 6 ? (
        <i className="tip bad">bad password</i>
      ) : length < 11 ? (
        <i className="tip weak">weak password</i>
      ) : length < 15 ? (
        <i className="tip strong">strong password</i>
      ) : (
        <i className="tip strong">very strong password</i>
      )}
    </StyledWrapper>
  );
};

export default Output;
