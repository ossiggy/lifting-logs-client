import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {noPlayers} from '../actions';

import './css/header.css';

export function Header(props){

  let playermode;
  if(props.singleplayer){
    playermode = <h3 className='player-mode'>Single Player</h3>
  }

  if(props.multiplayer){
    playermode = <h3 className='player-mode'>Multiplayer</h3>
  }

  return (
    <header className="header">
      <div className="title-box col-10">
        <h1 className="main-title">Lifting Logs</h1>
        <h2 className="subtitle">Crush PRs and Your Friends</h2>
      {playermode}
      </div>
      <Link to='/'>
        <button type="button" className="to-home" onClick={()=>props.dispatch(noPlayers())}><img src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Sports-Dumbbell-icon.png" alt="dumbbell" /></button>
      </Link>
    </header>
  );
}

const mapStateToProps = state => ({
  singleplayer: state.players.singleplayer === true,
  multiplayer: state.players.multiplayer === true,
  noplayer: state.players.singleplayer === false && state.players.multiplayer === false
})

export default connect(mapStateToProps)(Header)