import React, { useState } from 'react';
import styled from 'styled-components';
import copy from 'copy-to-clipboard';
const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: #339933;
  padding: 2rem 4rem;
  transition: background 0.5s;
  &.alert {
    background: #c81a00;
  }
  &.warning {
    background: #f9622f;
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
      /* font-size: 3.5vw; */
      padding: 0.3rem 0;
    }
    .btns {
      color: #ddd;

      .btn {
        padding: 0.2rem 0.4rem;
        border: none;
        cursor: pointer;
      }
    }
  }
  .tip {
    padding-left: 1rem;
    position: relative;
    color: #fff;

    &:before {
      content: '';
      position: absolute;
      left: -5px;
      display: block;
      width: 1rem;
      height: 1rem;
      background: #333;
    }
  }
`;

const Output = ({ pwd, updatePwd, length }) => {
  const [copied, setCopied] = useState(false);
  const handleUpdateClick = () => {
    updatePwd();
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
    <StyledWrapper className={length < 6 ? 'alert' : length < 11 ? 'warning' : null}>
      <div className="pwd">
        <p className="output">{pwd}</p>
        <div className="btns">
          <button onClick={handleUpdateClick} className="btn update">
            update
          </button>
          <button onClick={handleCopyClick} className="btn copy">
            {copied ? `copied` : `copy`}
          </button>
        </div>
      </div>
      {length < 6 ? (
        <i className="tip">bad password</i>
      ) : length < 11 ? (
        <i className="tip">weak password</i>
      ) : (
        <i className="tip">strong password</i>
      )}
    </StyledWrapper>
  );
};

export default Output;
