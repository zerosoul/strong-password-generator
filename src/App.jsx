import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './containers/Dashboard';
import Output from './containers/Output';
import { usePwd } from './hooks';
import { useLanguage } from './hooks';

const App = () => {
  const { currPwd, updateOpts, updatePwd, currOpts } = usePwd();
  const { lang, changeLang } = useLanguage();
  return (
    <main style={{ maxWidth: '2000px', margin: 'auto' }}>
      <Header title={lang.title} langName={lang.name} changeLang={changeLang} />
      <Output
        pwd={currPwd}
        updatePwd={updatePwd}
        length={currOpts.length}
        pwdLevelTip={lang.pwdLevelTip}
      />
      <Dashboard {...currOpts} updateOpts={updateOpts} optsTxt={lang.opts} />
      <Footer arts={lang.footer} />
    </main>
  );
};
export default App;
