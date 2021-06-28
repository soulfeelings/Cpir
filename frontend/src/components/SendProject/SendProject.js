import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newProjectThunk } from "../../redux/thunks/newProjectThunk";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    justifyContent: 'center',
    width: '300px',
    flexDirection: 'column',
  },
  divSendProjectMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  inputReact: {
    margin: '10px 0',
    border: 0,
    background: '#f4f4f4',
    width: '100%',
    lineHeight: '1.35em',
    color: '#000',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    display: 'inline - block',
    backgroundColor: '#222222',
    color: '#ffffff',
    border: 0,
    cursor: 'pointer',
    outline: 0,
    padding: '0.7em 1.5em 0.7em 1.5em',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#3b3680',
    },
    '&:active': {
      backgroundColor: '#368080',
    },
  },
  divBtn: {
    display: 'flex',
    justifyContent: 'center',
  }
}))

function SendProject() {

  const history = useHistory();

  const classes = useStyles()

  const formAddProject = useRef()

  const dispatch = useDispatch();

  const userId = useSelector(state => state.user.id);

  function getBack() {
    history.goBack()
  }

  const inputHandlearClear = (event) => {
    event.preventDefault()
    formAddProject.current.reset()
  }

  const formCreateProject = (event) => {
    event.preventDefault();

    if (userId !== null) {
      const createProject = {
        address: event.target.address.value,
        email: event.target.email.value,
        phone: event.target.userPhone.value,
        name: event.target.name.value,
        surName: event.target.surName.value,
        thirdName: event.target.thirdName.value,
        nameOrganization: event.target.nameOrganization.value,
        status: 'new',
        author: userId,
      }
      // stat({ status: false })
      dispatch(newProjectThunk(createProject))

    } else {
      const createProject = {
        address: event.target.address.value,
        email: event.target.email.value,
        phone: event.target.userPhone.value,
        name: event.target.name.value,
        surName: event.target.surName.value,
        thirdName: event.target.thirdName.value,
        nameOrganization: event.target.nameOrganization.value,
        status: 'new',
      }

      dispatch(newProjectThunk(createProject))

    }

    event.target.reset()
    history.push('/');
    

  }

  return (
    <div id="sendProject" className={classes.divSendProjectMain}>
      <header className={classes.header}>
        <h2>Заявка</h2>
      </header>
      <form className={classes.row} onSubmit={(event) => formCreateProject(event)} ref={formAddProject} >
        <div className={classes.row}>
          <TextField className={classes.inputReact} type="text" name="surName" id="outlined-basic1" label="Фамилия" variant="outlined" />
          <TextField className={classes.inputReact} type="text" name="name" id="outlined-basic2" label="Имя" variant="outlined" />
          <TextField className={classes.inputReact} type="text" name="thirdName" id="outlined-basic3" label="Отчество" variant="outlined" />
          <TextField className={classes.inputReact} type="email" name="email" id="outlined-basic4" label="Почта" variant="outlined" />
          <TextField className={classes.inputReact} type="number" name="userPhone" id="outlined-basic5" label="Телефон" variant="outlined" />
          <TextField className={classes.inputReact} type="text" name="address" id="outlined-basic6" label="Адрес объекта" variant="outlined" />
          <TextField className={classes.inputReact} type="text" name="nameOrganization" id="outlined-basic7" label="Организация *" variant="outlined" />
        </div>
        <div className={classes.divBtn}>
          <Button type='submit' className={classes.btn} >Отправить</Button>
          <Button onClick={(event) => { inputHandlearClear(event) }} className={classes.btn} >Очистить</Button>
        </div>

      </form>
      {userId && <Button onClick={() => getBack()}
      variant="contained" color="secondary">Отмена</Button>}
    </div>



  )
}

export default SendProject

