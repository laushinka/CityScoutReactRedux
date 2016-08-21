import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import getAddress from '../actions/getAddress'
import {browserHistory} from 'react-router'
import fetchScores from '../actions/fetchScores'
import Geosuggest from 'react-geosuggest';

var text;
class SubmitAddressContainer extends Component {
  handleSubmit(event) {
    event.preventDefault();
    text = event.target.firstChild.value;
    this.props.getAddress(text);
    browserHistory.push('/preferences')
  }

  render(){
    return (
        <form id="bar" onSubmit={this.handleSubmit.bind(this)}>
          <input id="textBar" type='text' placeholder='Enter Address' />
          <input type='submit' />
        </form>
    )
  }
}

function mapStateToProps(state){
  return {
    address: state.address
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchScores, getAddress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitAddressContainer)
