/**
 * Created by Sven on 8/15/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getPreferences from '../actions/getPreferences'
import Slider from '../components/preferenceSlider'
import fetchScores from '../actions/fetchScores'
import Address from '../components/address'
import { browserHistory } from 'react-router'

const categories = ['Safety', 'Education', 'Transportation', 'Parks', 'Rent'];
const PreferencesSlidersContainer = class extends Component {
  handleSubmit(event){
    event.preventDefault()
    var preferences = {}
    for (var i = 0; i < 5; i++) {
      let value = parseInt(event.target.children[i].children[1].children[0].value, 10)
      let category = document.getElementById(`${categories[i]}`).id
      preferences[category] = value
    }
    getPreferences(preferences)
    fetchScores(this.props.address.address)
    browserHistory.push('/results')
  }
  render() {
    
    return(
      <div>
        <Address text={this.props.address.address}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {categories.map((category, idx) => {
            return(
              <div>
                <label>{category}</label>
                <Slider key={idx} category={category} id={category}/>
              </div>
            )
          })}
          <input type="submit" />
        </form>

        {this.props.children}
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getPreferences, fetchScores}, dispatch)
}

function mapStateToProps(state) {
  return {address: state.address, preferences: state.preferences}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesSlidersContainer)
