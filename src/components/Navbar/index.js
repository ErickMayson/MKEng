/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import logo from '../../assets/images/MKlight.svg';
import { NavMain, NavMenu } from './styles';

function Navbar() {
  return (
    <NavMain>
      <NavMenu>
        <div className="navbar-links-container">
          <a href="/">Home</a>
          <a href="">Sobre nós</a>
          <a href="">Contato</a>
          <button className="primary-button" type="button">Faça um orçamento agora</button>
        </div>
      </NavMenu>
    </NavMain>
  );
}

export default Navbar;
