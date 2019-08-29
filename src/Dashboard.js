import React from 'react';
import styled from 'styled-components';
import SliderRange from './components/Range';
const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem;
  .tip {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  .length {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.4rem;
    .tip {
      font-size: 1rem;
      margin-bottom: 0.4rem;
      font-weight: 800;
    }
  }
  .opts {
    border: none;
    display: flex;
    flex-direction: column;
    > h2 {
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 0.4rem;
    }
    .cbs {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .cb-wrapper {
        margin: 0.5rem 0;
        /* margin-left: 1rem; */
        input[type='checkbox'] {
          opacity: 0;
          + label {
            position: relative;
            cursor: pointer;
            &::before {
              content: '';
              position: absolute;
              left: -22px; /* 这个后面会调整 */
              top: 0;
              border-radius: 2px;
              border: 1px solid #2196f3;
              width: 18px;
              height: 18px;
              background: transparent;
            }
            &::after {
              content: '';
              transform: rotateX(180deg);
              position: absolute;
              left: -20px;
              top: 2px;
              border-radius: 2px;
              width: 16px;
              height: 16px;
            }
          }
          &:checked {
            + label::after {
              content: 'ヘ';
              background: #2196f3;
              font-size: 18px;
              color: #fff;
            }
          }
          &:focus {
            + label::before {
              box-shadow: 0 0px 8px #2196f3;
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
        Slide the slider, and select the options below, to lengthen your password and strengthen
        your security.
      </div>
      <div className="length">
        <h2 className="tip">Length (4-32)</h2>
        <SliderRange onChange={handleLengthChange} value={length} />
      </div>
      <div className="opts">
        <h2>Options</h2>
        <div className="cbs">
          <div className="cb-wrapper">
            <input
              type="checkbox"
              onChange={handleChange}
              disabled={!number}
              checked={letter}
              name="letter"
              id="letters"
            />
            <label htmlFor="letters">Letters</label>
          </div>
          <div className="cb-wrapper">
            <input
              type="checkbox"
              disabled={!letter}
              onChange={handleChange}
              checked={letter && uppercase}
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
              disabled={!letter}
              checked={number}
              name="number"
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Dashboard;
