import React from 'react';

import './Navigation.css';

// 就近维护原则

const Navigation = () => (
  <div className="navbar">
    <a className="navbar__item" href="HOME">Home</a>
    <a className="navbar__item" href="RESUME">Resume</a>
    <a className="navbar__item" href="SERVICES">Services</a>
    <a className="navbar__item" href="BLOG">Blog</a>
    <a className="navbar__item" href="CONTACT">Contact</a>
  </div>
);

export default Navigation;
