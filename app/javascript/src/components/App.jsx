import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePageContainer from '../containers/HomePageContainer';
import LogIn from '../containers/LogIn';
import PostListContainer from '../containers/PostListContainer';
import Header from './Header';
import Body from './Body';

export class App extends Component {
  componentWillMount() {
    const { initAuth, fetchPostsData } = this.props;
    initAuth();
    fetchPostsData();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    );
  }
}

