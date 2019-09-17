import { useState, useEffect } from 'react';
import { getPwd } from './utils';

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
export { usePwd, useMobile };
