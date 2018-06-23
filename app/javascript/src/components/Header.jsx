import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import LoginStatusContainer from '../containers/LoginStatusContainer';
import LoginToolBar from '../containers/LoginToolBar';

const Header = () =>
  <Navbar className="pt-dark">
      <NavbarGroup align={Alignment.LEFT}>
        <Link to="/">
          <NavbarHeading>Today I Learned</NavbarHeading>
        </Link>
        <NavbarDivider />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <LoginStatusContainer />
        <NavbarDivider />
        <LoginToolBar />
      </NavbarGroup>
    </Navbar>

export default Header;
