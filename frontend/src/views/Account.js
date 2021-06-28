import { makeStyles, Container, CssBaseline, Button } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { historyThunk } from '../redux/thunks/historyThunk';
import ProjectList from './ProjectList';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    overflow: "auto",
    padding: "20px 0"
  },
  child: {
    backgroundImage: "url(113.jpeg)",
    backgroundSize: "cover",
    height: "100vh",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: -10,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto"
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    left: 0,
    minHeight: 'min-content',
    maxWidth: 300,
  },
  mainProfile: {
    boxShadow: '0 0 2px 2px black solid',
    display: 'flex',
    flexDirection: 'column',

  },
  btn: {
    margin: '40px 20px 0 20px',
    border: '1px solid',
    lineHeight: 1.5,
    borderColor: '#0063cc',
    '&:hover': {
      borderColor: 'green',
      boxShadow: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
}))

export default function Account() {
  const classes = useStyles();
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const history = useHistory();

  const [project, setProject] = useState({ status: false })
  const [list, setList] = useState({ status: false })

  const btnHandlerHistory = () => {
    dispatch(historyThunk(user.id))
    setProject({ status: false })
    setList({ status: true })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.child}></div>
      {!project.status & !list.status ? 
        <div className={classes.buttons}>
        <Button  color="secondary"
              variant="contained" onClick={() => { btnHandlerHistory() }} className={classes.btn}>Мои Заявки</Button>

        <Button
              className={classes.btn}
              size="large"
              color="secondary"
              variant="contained"
              onClick={() => { history.push('/clientform') }}
            >
              Оставить заявку
            </Button>
        </div>
      : ''}

      <Container className={classes.mainProfile}>
  
        {list.status ? <ProjectList stat={setList} /> : <Typography gutterBottom variant="h5" component="h2">
          </Typography>}
      </Container>

    </div>
  );
}
