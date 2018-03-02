import React from 'react';
import {connect} from 'react-redux';

import './css/weight-bench.css';

export function WeightBench(props){
  return(
    <div className="weight-bench col-12">
      <button className="fo-five"><div className="little-circle">45</div></button>
      <button className="two-five"><div className="little-circle">25</div></button>
      <button className="ten"><div className="little-circle">10</div></button>
      <button className="five"><div className="little-circle">5</div></button>
    </div>
  )
}

export default connect()(WeightBench);