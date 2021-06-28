export const closeProjectThunk = (info) => {
  return (dispatch) => {
    fetch('/projects', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectId: info.projectId,
        userId: info.userId,
        status: info.status
      })
    })
      .then(res => res.json())
      .then(data => dispatch({ type: 'CLOSE_PROJECT' }))
      .catch(error => console.log(error))
  }
}
