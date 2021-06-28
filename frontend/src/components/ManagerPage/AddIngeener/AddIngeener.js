import React from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import SvgIcon from '@material-ui/core/SvgIcon';
import { addIngeenerThunk } from '../../../redux/thunks/addIngeenerThunk';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    width: (140),
    height: (63),
    backgroundImage: 'url(cpirPng.png)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddIngeener() { const classes = useStyles()
const dispatch = useDispatch();
const history = useHistory()

const addIngeenerForm = (event) => {
  event.preventDefault()

  const createUser = {
    name: event.target.firstName.value,
    surName:event.target.surName.value,
    thirdName:event.target.thirdName.value,
    email: event.target.email.value,
    password: event.target.password.value,
  }

dispatch(addIngeenerThunk(createUser))

  history.push('/profile')
}

  return (
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <SvgIcon className={classes.avatar} />
       
        <form onSubmit={(event) => addIngeenerForm(event)} className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="surName"
                variant="outlined"
                required
                fullWidth
                id="surName"
                label="Фамилия"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Имя"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="thirdName"
                variant="outlined"
                required
                fullWidth
                id="thirdName"
                label="Отчество"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Добавить инженера
          </Button>
        </form>
      </div>
    </Container>
    </div>
  )
}

