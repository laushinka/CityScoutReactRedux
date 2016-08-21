/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';

const Slider = class extends Component {
  showValue(event){
    document.getElementById(event.target.id + "span")
            .innerHTML=event.target.value;
  }
  render() {
    return(
      <div className="sliders-form">
          <input id={this.props.id} type="range" default="5" min="1" max="10" data-slider-step="1" onChange={this.showValue}/>
          <span id={this.props.id + "span"}>5</span>
      </div>
    )
  }
};

export default Slider
