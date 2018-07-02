import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Content from './Content';

class Body extends React.Component {
  render() {
    return (
      <div className="app-body">
        <Content />
        <Sidebar />
      </div>
    )
  }
}

export default Body;
