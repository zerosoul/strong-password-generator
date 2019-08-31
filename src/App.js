import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './Dashboard';
import Output from './Output';
import { getPwd } from './utils';

// import styled from 'styled-components';
// const StyledBody = styled.section`
//   height: 60vh;
// `;
const App = () => {
  const [opts, setOpts] = useState({
    length: 12,
    letter: true,
    number: true,
    symbol: true,
    uppercase: true,
    excludeSimilar: true
  });
  const [currPwd, setCurrPwd] = useState(getPwd(opts.length, opts));
  const updateOpts = newOpts => {
    setOpts({
      ...opts,
      ...newOpts
    });
  };
  useEffect(() => {
    const { length, ...otherOpts } = opts;
    let newPwd = getPwd(length, otherOpts);
    setCurrPwd(newPwd);
  }, [opts]);
  const updatePwd = () => {
    const { length, ...otherOpts } = opts;
    let newPwd = getPwd(length, otherOpts);
    setCurrPwd(newPwd);
  };

  return (
    <>
      <Header />
      <Output pwd={currPwd} updatePwd={updatePwd} length={opts.length} />
      <Dashboard {...opts} updateOpts={updateOpts} />
      <Footer />
    </>
  );
};
export default App;
