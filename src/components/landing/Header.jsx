import React from "react";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__img" />
    </header>
  );
};

export default Header;
