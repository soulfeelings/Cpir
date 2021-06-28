const initialState = {
  isAuth: false,
  id: null,
  login: null,
  activeProject: null,
  status: null
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'INIT_USER':
      return { ...state, id: action.payload.id, login: action.payload.name, isAuth: true, status: action.payload.status, activeProject: action.payload.activeProject }
    case 'USER_LOGOUT':
      localStorage.removeItem('token');
      return initialState
    case 'CLOSE_PROJECT_USER':
      return { ...state, activeProject: null }
    case 'INIT_PROJECT_USER':
      return { ...state, activeProject: action.payload }
    default:
      return state;
  }
}

export default userReducer
