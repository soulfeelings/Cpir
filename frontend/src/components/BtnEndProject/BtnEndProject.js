import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { closeProjectThunk } from '../../redux/thunks/closeProjectThunk';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    marginBottom: '10px',
  },

});

function BtnEndProject({ id, setProject, project }) {
  const classes = useStyles();

  const idUser = useSelector(state => state.user.id)

  const dispatch = useDispatch()

  const btnHandlerEnd = () => {

    dispatch(closeProjectThunk({

      projectId: id,
      userId: idUser,

      status: 'done'
    }))

    dispatch({ type: 'CLOSE_PROJECT_USER' })

    setProject(project.filter(el => el._id !== id))

  }

  return (
    <Button className={classes.btn} onClick={() => { btnHandlerEnd() }} variant="contained" color="secondary">Завершить</Button>
  )
}

export default BtnEndProject
