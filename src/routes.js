import React from 'react'
import {Route, Router} from 'react-router'
import SubmitAddressContainer from './containers/submitAddressContainer'
import PreferencesSliderContainer from './containers/preferencesSlidersContainer'
import ScoresResult from './containers/ScoresResult'

const Routes = (
  <Router>
    <Route path="/" component={SubmitAddressContainer} />
    <Route path="/preferences" component={PreferencesSliderContainer} />
    <Route path="/results" component={ScoresResult} />
  </Router>
)

export default Routes
