export const loginThunk = (logInfo) => {
  return function (dispatch) {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ logInfo })
    })
      .then((res) => res.json())
      .then(data => {
        if (data.message) {
          throw new Error(data.message)
        } else return data
      })
      .then(data => {
        if (data.activeProject) {
          dispatch({ type: 'INIT_PROJECT', payload: data.activeProject })
          return data
        } else { return data }
      })
      .then((data) => dispatch({ type: 'INIT_USER', payload: data }))
      .then((data) => localStorage.setItem('token', data.payload.token))
      .catch((error) => alert(`${error.message}`));
  }
}
