import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';

import './css/header.css';

export default function Header(props){
  return (
    <header className="header">
      <div className="title-box">
        <h1 className="main-title">Lifting Logs</h1>
        <h2 className="subtitle">Crush PRs and Your Friends</h2>
      </div>
      {/* <TopNav /> */}
    </header>
  );
}