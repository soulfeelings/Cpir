import { makeStyles, Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { newProjectThunk } from '../redux/thunks/newProjectThunk';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '100px',
    marginRight: '100px',
    minWidth: '100px',
  },
  btnCreate: {
    backgroundColor: '#41a541',
  },
  btn: {
    margin: 'auto',
    marginTop: '30px',
  }
}))

function NewProject({ stat }) {
  const classes = useStyles();
  const history = useHistory();

  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const formCreateProject = (event) => {
    event.preventDefault();

    const createProject = {
      title: event.target.name.value,
      address: event.target.address.value,
      author: user.id,
    }

    dispatch(newProjectThunk(createProject))

    event.target.reset()

    history.push('/')

  }

  return (
    <>
      <form onSubmit={(event) => formCreateProject(event)} className={classes.form}>

        <TextField name='name' id="standard-basic1" label="Название" />
        <TextField name='address' id="standard-basic2" label="Адрес" />
        <Button type='submit' variant="contained" className={`${classes.btnCreate} ${classes.btn}`} >Создать</Button>
      </form>

      <Button onClick={() => { stat({ status: false }) }} className={classes.btn} variant="contained" color="secondary">Отмена</Button>

    </>
  )
}

export default NewProject
