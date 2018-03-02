import React from 'react';
import {connect} from 'react-redux';

export function Scoreboard(props){
  if(props.singleplayer){
    return(
      <div className="scoreboard">

      </div>
    )
  }
  if(props.multiplayer){
    return(
      <div className="scoreboard">
        
      </div>
    )
  }
  return <div></div>
}

const mapStateToProps = state => ({
  multiplayer: state.players.multiplayer === true,
  singleplayer: state.players.singleplayer === true
})

export default connect(mapStateToProps)(Scoreboard);