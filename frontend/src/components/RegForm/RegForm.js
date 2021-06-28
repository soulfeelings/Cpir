import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerThunk } from '../../redux/thunks/registerThunk'
import SvgIcon from '@material-ui/core/SvgIcon';


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

function RegForm() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const history = useHistory()

  const registerHendler = (event) => {
    event.preventDefault()

    if (event.target.password.value.length === 0) {

    } else if (event.target.email === 0) {

    } else if (event.target.firsName === 0) {

    } else {

      const newUser = {
        name: event.target.firstName.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };

      dispatch(registerThunk(newUser))

      history.push('/')

    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <SvgIcon className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form onSubmit={(event) => { registerHendler(event) }} className={classes.form} >
          <Grid container spacing={2}>
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
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Почта"
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
                label="Пароль"
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
            Зарегистрироваться
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Уже есть аккаунт? Войти
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default RegForm
