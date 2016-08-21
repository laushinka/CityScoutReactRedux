export const DETAILS_MODAL = 'DETAILS_MODAL'

export function openModal(modalType, key) {
  return {
    type: 'OPEN_MODAL',
    payload: { type: modalType, key }
  }
}

export function closeModal(modalType, key) {
  return {
    type: 'CLOSE_MODAL',
    payload: { type: modalType, key }
  }
}
