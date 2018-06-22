import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button, Alignment } from '@blueprintjs/core';
import LoginToolBar from './containers/LoginToolBar';
import LogIn from './containers/LogIn';
import LoginStatus from './containers/LoginStatusContainer';

export const App = () =>
  <div className="app">
    <Navbar className="pt-dark">
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Today I Learned</NavbarHeading>
        <NavbarDivider/>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <LoginStatus/>
        <NavbarDivider/>
        <LoginToolBar/>
      </NavbarGroup>
    </Navbar>
    <LogIn />
  </div>
