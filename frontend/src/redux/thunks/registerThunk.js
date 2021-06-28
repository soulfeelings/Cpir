export const registerThunk = (newUser) => {
  return function (dispatch) {
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUser })
    })
      .then(res => res.json())

      .then(data => {
        if (data.message) {
          throw new Error(data.message)
        } else return data

      })
      .then(data => dispatch({ type: 'INIT_USER', payload: data }))
      .then(data => localStorage.setItem('token', data.payload.token))
      .catch((error) => console.log(error))
  }
}
