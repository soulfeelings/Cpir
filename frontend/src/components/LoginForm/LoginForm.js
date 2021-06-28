import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginThunk } from '../../redux/thunks/loginThunk'
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
    backgroundImage: "url(cpirPng.png)",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const history = useHistory()

  const loginHendler = (event) => {
    event.preventDefault()

    if (event.target.password.value.length === 0) {

    } else if (event.target.email === 0) {

    } else if (event.target.firsName === 0) {

    } else {

      const logInfo = {
        name: event.target.email.value,
        password: event.target.password.value,
      };

      dispatch(loginThunk(logInfo))

      history.push('/profile')

    }

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <SvgIcon className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Войти
        </Typography>
        <form onSubmit={(event) => { loginHendler(event) }} className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Войти
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Нет Аккаунта? Регистрация"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}
