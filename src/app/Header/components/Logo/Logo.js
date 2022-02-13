import React from 'react';

const styles = {
  wrapper: {
    fontSize: '1.5rem',
    fontWeight: '500',
  },
  highlight: {
    color: '#377e9a',
  },
};

const Logo = () => (
  <div style={styles.wrapper}>
    <span style={styles.highlight}>
      Tifa
    </span>
    Lockhart
  </div>
);

export default Logo;
