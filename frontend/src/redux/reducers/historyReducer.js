const initialState = {
  allProject: []
}

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_HISTORY':
      return { ...state, allProject: [...action.payload] }
    default:
      return state
  }
}
