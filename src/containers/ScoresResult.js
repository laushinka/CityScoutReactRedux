import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {openModal} from  '../actions/modals'
import PreferencesSlidersContainer from '../containers/preferencesSlidersContainer'
import TotalScoreBox from '../components/totalScoreBox'
import ScoreGraph from '../components/scoreGraph'
import BarGraph from '../components/barGraph'
import radarChart from '../components/radarChart'
import barChart from '../components/barChart'
import Modal from '../components/modal'

const ScoresResult = class extends Component {
  render() {
    var dictionary = {
      "accidents": "Safety",
      "crime": "Safety",
      "schools": "Education",
      "subways": "Transportation",
      "bikes": "Transportation",
      "parks": "Parks"
    }
    var scores = this.props.scores
    var preferences = this.props.preferences
    var labels = Object.keys(scores);
    var totalWeight = 0
    var totalScore =0
    var scoreData = labels.map((key) => {
      var score = scores[key]
      var weight = preferences[dictionary[key]]
      var value = score * weight
      totalWeight += weight
      totalScore += value
      return value
    });
    scoreData = scoreData.map((score) => {
      return Math.floor(score / totalWeight)
    })
    totalScore = Math.floor(totalScore / totalWeight)
    return(
      <div>
        {this.renderModal('accidents')}
        <div className="container-fluid">
          <button onClick={this.handleAccidentCategoryClick.bind(this)}>Simulate click on accidents</button>
          <div className="row" id="chartsBox">
            <TotalScoreBox className="col-md-12" totalScore={totalScore} />
            <div className='col-md-4'>
              <PreferencesSlidersContainer />
            </div>
            <div className="col-md-4" id="radarChartBox">
              <ScoreGraph scores={scores} keys={labels} radarChart={radarChart} scoreData={scoreData}/>
            </div>

            <div className="col-md-4" id="barChartBox">
              <BarGraph keys={labels} scores={this.props.attributes} averages={this.props.averages} barChart={barChart}/>
            </div>
          </div>
        </div>
        </div>

    )
  }

  renderModal(category) {
    if (this.props.modals === `DETAILS_MODAL_${category}`) {
      return (<Modal scores={this.props.scores}  />)

    }
  }

  handleAccidentCategoryClick() {
    // pass in different category
    this.props.openModal('DETAILS_MODAL', 'accidents')
  }
};

function mapStateToProps(state) {
  //debugger
  return {
    scores: state.scores.scores.data,
    averages: state.scores.averages.data,
    attributes: state.scores.attributes,
    preferences: state.preferences.preferences,
    modals: state.modals
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({openModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
