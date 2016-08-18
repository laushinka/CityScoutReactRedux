export default function scoresReducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SCORES':
      return Object.assign({}, state, {scores: action.payload})
    case 'GET_PREFERENCES':
      return Object.assign({}, state, {preferences: action.payload})
    default:
      return state
  }
}
