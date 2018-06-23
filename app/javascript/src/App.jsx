import React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment, Text } from '@blueprintjs/core';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import LoginToolBar from './containers/LoginToolBar';
import LogIn from './containers/LogIn';
import LoginStatus from './containers/LoginStatusContainer';

const HomePage = () =>
  <Text>Hello, this is homepage</Text>

export const App = () =>
  <BrowserRouter>
  <div className="app">
    <Navbar className="pt-dark">
      <NavbarGroup align={Alignment.LEFT}>
        <Link to="/">
          <NavbarHeading>Today I Learned</NavbarHeading>
        </Link>
        <NavbarDivider />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <LoginStatus />
        <NavbarDivider />
        <LoginToolBar />
      </NavbarGroup>
    </Navbar>
    <Switch>
      <Route path="/login" component={LogIn} />
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
  </BrowserRouter>
