import React from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

import './Header.css';

// 我们已经能够在 JS 里面写 HTML 了
// 能不能在 JS 里面写 CSS？

const Header = ({
  activePage,
  setActivePage,
}) => (
  <header className="nav">
    <div className="nav__left">
      <Logo />
    </div>
    <div className="nav__right">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
    </div>
  </header>
);

export default Header;
