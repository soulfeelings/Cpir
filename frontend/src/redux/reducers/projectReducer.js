const initialState = {
  isActive: false,
  id: null,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT_PROJECT':
      return { ...state, id: action.payload, isActive: true }
    case 'CLOSE_PROJECT':
      return initialState
    default:
      return state;
  }
}

export default userReducer
