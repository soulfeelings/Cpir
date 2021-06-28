export const newProjectThunk = (projectInfo) => {
  return (dispatch) => {
    fetch('/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ projectInfo })
    })
      .then(res => res.json())
      .catch((error) => console.log(error))
  }
}
