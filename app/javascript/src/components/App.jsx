import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePageContainer from '../containers/HomePageContainer';
import LogIn from '../containers/LogIn';
import Header from './Header';

export class App extends Component {
  componentWillMount(){
    const { initAuth } = this.props;
    initAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header/>
          <Switch>
            <Route path="/login" component={LogIn} />
            <Route path="/" component={HomePageContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

