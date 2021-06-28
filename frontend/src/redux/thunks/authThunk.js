export const authThunk = () => {
  return (dispatch) => {
    fetch("/auth", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message) {
          throw new Error(data.message);
        } else return data;
      })
      .then(data => {
        if (data.activeProject) {
          dispatch({ type: 'INIT_PROJECT', payload: data.activeProject })
          return data
        } else { return data }
      })
      .then((data) => dispatch({ type: "INIT_USER", payload: data }))
      .then((data) => localStorage.setItem("token", data.payload.token))
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
      });
  };
};
