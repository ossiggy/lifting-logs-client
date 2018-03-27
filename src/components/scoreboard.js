import React from 'react';
import {connect} from 'react-redux';

export function Scoreboard(props){
  return( 
    <div className="scoreboard">
      <div className="weight-display">
        weight
      </div>
      <div className="rep-count">
        rep
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  multiplayer: state.players.multiplayer === true,
  singleplayer: state.players.singleplayer === true
})

export default connect(mapStateToProps)(Scoreboard);