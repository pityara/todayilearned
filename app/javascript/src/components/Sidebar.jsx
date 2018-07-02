import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () =>
  <div className='sidebar'>
    <ul>
      <li><Link to="/">HomePage</Link></li>
      <li><Link to="/posts">Check posts</Link></li>
      <li><Link to="/posts/new">Create new post</Link></li>
    </ul>
  </div>

export default Sidebar;