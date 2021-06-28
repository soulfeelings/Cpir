export const historyThunk = (id) => {
  return (dispatch) => {
    fetch('/userhistory', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
      })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'INIT_HISTORY', payload: data }))
      .catch(error => console.log(error))
  }
}
