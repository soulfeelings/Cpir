import { useSelector } from "react-redux"
import { makeStyles, Button } from '@material-ui/core';
import UserPage from "../components/UserPage/UserPage";

const useStyles = makeStyles(() => ({
  btn: {
    margin: 'auto',
    marginTop: '30px',
  }
}))

function ProjectList({ stat }) {
  const classes = useStyles();
  const list = useSelector(state => state.history.allProject)
  return (
    <>
      {list.map(el => <UserPage key={el._id} elem={el} />)}
      <Button onClick={() => { stat({ status: false }) }} className={classes.btn} variant="contained" color="secondary">Выйти</Button>

    </>
  )
}

export default ProjectList
