import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn from '../containers/LogIn';
import PostListContainer from '../containers/PostListContainer';
import HomePageContainer from '../containers/HomePageContainer';
import PostContainer from '../containers/PostContainer';
import NewPostContainer from '../containers/NewPostContainer';

const Content = () =>
  <div className="content">
    <Switch>
      <Route path="/login" component={LogIn} />
      <Route path="/posts/new" component={NewPostContainer} />
      <Route path="/posts/:id" component={PostContainer} />
      <Route path="/posts" component={PostListContainer} />
      <Route path="/" component={HomePageContainer} />
     </Switch>
  </div>

export default Content;
