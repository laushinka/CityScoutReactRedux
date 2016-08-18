import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchScores from '../actions/fetchScores'
import TotalScoreBox from '../components/totalScoreBox'
import ScoreGraph from '../components/scoreGraph'
import radarChart from '../components/radarChart'
import VictoryGraph from '../components/victoryBar'


const ScoresResult = class extends Component {
  render() {
    var scores = this.props.scores || [];
    var totalScore = scores.total; //////// name may be different
    return(
      <div>
        <TotalScoreBox totalScore={totalScore} />

        <ScoreGraph scores={scores} radarChart={radarChart} />

        <VictoryGraph scores={scores} />

      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    scores: state.scores
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchScores}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoresResult)
