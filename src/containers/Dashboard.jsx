import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../hooks';
import SliderRange from '../components/Range';
const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem 7rem;
  box-shadow: 0 7px 15px 1px #0b210a;
  &.mobile {
    padding: 2rem;
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
      justify-content: flex-start;
      flex-wrap: wrap;
      max-width: 28rem;
      .cb-wrapper {
        margin: 0.5rem 0.2rem;
        margin-right: 1rem;
        input[type='checkbox'] {
          opacity: 0;
          + label {
            position: relative;
            cursor: pointer;
            &::before {
              content: '';
              transition: all 0.5s;
              position: absolute;
              left: -22px; /* 这个后面会调整 */
              top: -2px;
              border-radius: 2px;
              border: 1px solid #2196f3;
              width: 18px;
              height: 18px;
              background: transparent;
            }
            &::after {
              content: '';
              transition: all 0.5s;
              transform: rotateX(180deg);
              position: absolute;
              left: -20px;
              top: 0;
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
            + label::after {
              background: #aaa;
              color: #eee;
            }
          }
        }
      }
    }
  }
`;
const Dashboard = ({
  length = 4,
  letter,
  uppercase,
  symbol,
  number,
  excludeSimilar,
  updateOpts,
  optsTxt
}) => {
  const { isMobile } = useMobile();
  const {
    length: lengthTxt,
    opt: optTxt,
    number: numberTxt,
    letter: letterTxt,
    mixCase,
    punc,
    similar
  } = optsTxt;

  const handleChange = ({ target: ele }) => {
    console.log('wtf', ele.name, ele.checked);
    updateOpts({ [ele.name]: ele.checked });
  };
  const handleLengthChange = ({ target: ele }) => {
    console.log('wtf', ele.value);
    updateOpts({ length: Number(ele.value) });
  };
  return (
    <StyledWrapper className={isMobile ? 'mobile' : ''}>
      <div className="length">
        <h2 className="tip">{lengthTxt} (4-32)</h2>
        <SliderRange onChange={handleLengthChange} value={length} />
      </div>
      <div className="opts">
        <h2>{optTxt}</h2>
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
            <label htmlFor="letters">{letterTxt}</label>
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
            <label htmlFor="mixed">{mixCase}</label>
          </div>
          <div className="cb-wrapper">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={symbol}
              name="symbol"
              id="symbols"
            />
            <label htmlFor="symbols">{punc}</label>
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
            <label htmlFor="numbers">{numberTxt}</label>
          </div>
          <div className="cb-wrapper">
            <input
              type="checkbox"
              onChange={handleChange}
              checked={excludeSimilar}
              name="excludeSimilar"
              id="excludeSimilar"
            />
            <label htmlFor="excludeSimilar">{similar}</label>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Dashboard;
