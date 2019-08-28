import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1rem 2rem;
  .tip {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }
  .length {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.4rem;
  }
  .opts {
    border: none;
    display: flex;

    .cb-wrapper {
      margin: 0.5rem 0;
    }
    input[type='checkbox'] {
      opacity: 0;

      + label {
        position: relative;
        cursor: pointer;
        // margin-left:18px;
        &::before {
          content: '';
          position: absolute;
          left: -22px; /* 这个后面会调整 */
          border-radius: 5px;
          border: 1px solid #6f686a;
          width: 18px;
          height: 18px;
          background: transparent;
        }
        &::after {
          content: '';
          position: absolute;
          left: -18px;
          top: 3px;
          border-radius: 5px;
          width: 12px;
          height: 12px;
        }
      }
      &:checked {
        + label::after {
          background: #db3;
        }
      }
      &:focus {
        + label::before {
          box-shadow: 0 0px 8px #db3;
        }
      }
      &:disabled {
        + label::before {
          border: 1px solid #ddd;
          box-shadow: 0 0px 4px #ddd;
        }
      }
    }
  }
`;
const Dashboard = ({ length = 4, letter, uppercase, symbol, number, updateOpts }) => {
  const handleChange = ({ target: ele }) => {
    console.log('wtf', ele.name, ele.checked);
    updateOpts({ [ele.name]: ele.checked });
  };
  const handleLengthChange = ({ target: ele }) => {
    console.log('wtf', ele.value);
    updateOpts({ length: Number(ele.value) });
  };
  return (
    <StyledWrapper>
      <div className="tip">
        Use the slider, and select from the options, below, to lengthen your password and strengthen
        your security.
      </div>
      <div className="length">
        <i className="tip">Password Length (4-64)</i>
        <input
          type="range"
          step="1"
          onChange={handleLengthChange}
          min="4"
          max="64"
          value={length}
        />
      </div>
      <div className="opts">
        <h2>Options</h2>
        <div className="cb-wrapper">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={letter}
            name="letter"
            id="letters"
          />
          <label htmlFor="letters">Letters</label>
        </div>
        <div className="cb-wrapper">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={uppercase}
            name="uppercase"
            id="mixed"
          />
          <label htmlFor="mixed">Mixed case</label>
        </div>
        <div className="cb-wrapper">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={symbol}
            name="symbol"
            id="symbols"
          />
          <label htmlFor="symbols">Punctuation</label>
        </div>
        <div className="cb-wrapper">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={number}
            name="number"
            id="numbers"
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Dashboard;
