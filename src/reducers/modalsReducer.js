export default function modalsReducer(state = '', action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      // sets stateKey -> type and category
      const stateCategory = `${action.payload.type}_${action.payload.category}`;
      return stateCategory
    case 'CLOSE_MODAL':
      return '';
    default:
      return state;
    }
}
