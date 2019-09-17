import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './containers/Dashboard';
import Output from './containers/Output';
import { usePwd } from './hooks';

const App = () => {
  const { currPwd, updateOpts, updatePwd, currOpts } = usePwd();

  return (
    <>
      <Header />
      <Output pwd={currPwd} updatePwd={updatePwd} length={currOpts.length} />
      <Dashboard {...currOpts} updateOpts={updateOpts} />
      <Footer />
    </>
  );
};
export default App;
