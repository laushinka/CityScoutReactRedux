export default function modalsReducer(state = '', action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      // sets stateKey -> type and category
      const stateKey = `${action.payload.type}_${action.payload.key}`;
      return stateKey
    case 'CLOSE_MODAL':
      return '';
    default:
      return state;
    }
}
