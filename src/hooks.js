import { useState, useEffect } from 'react';
import { getPwd } from './utils';
import Lang from './assets/lang.json';

const useLanguage = () => {
  const isEN = navigator.language.indexOf('en') > -1;
  const [lang, setLang] = useState(isEN ? Lang.en : Lang.zh);
  const changeLang = val => {
    if (val == 'en') {
      setLang(Lang.en);
    } else {
      setLang(Lang.zh);
    }
  };
  return { lang, changeLang };
};
const useMobile = (width = 750) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= width);

  console.log('mmmmmm');
  useEffect(() => {
    const checkMobile = () => {
      console.log('rrrr');

      if (window.innerWidth <= width) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile, true);
    };
  }, [width]);
  return { isMobile };
};
const usePwd = () => {
  const [opts, setOpts] = useState({
    length: 12,
    letter: true,
    number: true,
    symbol: true,
    uppercase: true,
    excludeSimilar: true
  });

  const [currPwd, setCurrPwd] = useState(getPwd(opts.length, opts));
  useEffect(() => {
    const { length, ...otherOpts } = opts;
    let newPwd = getPwd(length, otherOpts);
    setCurrPwd(newPwd);
  }, [opts]);
  const updateOpts = newOpts => {
    setOpts({
      ...opts,
      ...newOpts
    });
  };
  const updatePwd = () => {
    const { length, ...otherOpts } = opts;
    let newPwd = getPwd(length, otherOpts);
    setCurrPwd(newPwd);
  };
  return { currPwd, currOpts: opts, updateOpts, updatePwd };
};
export { usePwd, useMobile, useLanguage };
