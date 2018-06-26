import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () =>
  <div className='sidebar'>
    <Link to="/">HomePage</Link>
    <Link to="/posts">Check posts</Link>
  </div>

export default Sidebar;