import React from 'react';
import ToolBar from './containers/ToolBar';
import LogIn from './containers/LogIn'

export const App = () =>
  <div className="app">
    <span className="pt-icon-standard pt-icon-more" />
    <ToolBar />
    <LogIn />
  </div>
