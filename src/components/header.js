import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './css/header.css';

export function Header(props){
  return (
    <header className="header">
      <div className="title-box col-6">
        <h1 className="main-title">Lifting Logs</h1>
        <h2 className="subtitle">Crush PRs and Your Friends</h2>
      </div>
      <Link to='/'>
        <button className="to-home"><img src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Sports-Dumbbell-icon.png" alt="dumbbell" /></button>
      </Link>
    </header>
  );
}

export default connect()(Header)