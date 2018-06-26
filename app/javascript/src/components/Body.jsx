import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LogIn from '../containers/LogIn';
import PostListContainer from '../containers/PostListContainer';
import HomePageContainer from '../containers/HomePageContainer';
import Sidebar from './Sidebar';

class Body extends React.Component {
  render() {
    return (
      <div className='app-body'>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/posts" component={PostListContainer} />
          <Route path="/" component={HomePageContainer} />
        </Switch>
        <Sidebar />
      </div>
    )
  }
}

export default Body;
