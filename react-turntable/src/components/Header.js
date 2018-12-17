import React from 'react';
import '../assets/scss/Header.scss';

const Header = (props) => {
  const { logo } = props;

  return (
    <div className="header-wrap">
      { logo ? <img className="logo" src={logo} alt="logo" /> : null }
      <div className="con"></div>
    </div>
  )
}

export default Header;