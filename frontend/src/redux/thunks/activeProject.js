export const activeProject = (info) => {
  return (dispatch) => {
    dispatch({ type: 'INIT_PROJECT', payload: info.projectId })
    dispatch({ type: 'INIT_PROJECT_USER', payload: info.projectId })
    fetch('/user', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ info })
    })
      .then((response) => response.json())
      .catch((err) => console.log(err))
  }
}
