export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const SET_HEADER_POSITION = 'SET_HEADER_POSITION'
export const SET_SUB_HEADER_POSITION = 'SET_SUB_HEADER_POSITION'

const initialState = {
  isLoading: false,
  headerPosition: 'static',
  subHeaderPosition: 'static',
}

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case SET_HEADER_POSITION:
      return { ...state, headerPosition: action.position }
    case SET_SUB_HEADER_POSITION:
      return { ...state, subHeaderPosition: action.position }
    default: return state
  }
}
