export function openModal(modalType, category) {
  return {
    type: 'OPEN_MODAL',
    payload: { type: modalType, category }
  }
}

export function closeModal(modalType, category) {
  return {
    type: 'CLOSE_MODAL',
    payload: { type: modalType, category }
  }
}
