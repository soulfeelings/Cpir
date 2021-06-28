import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    gap: "10px",
    backgroundImage: "url(grunge-wall.png)"
  },
  btn: {
    margin: "10px"
  }
}));

function ManagerPage(props) {
  const classes = useStyles();

  const history = useHistory()

  const addIngeener =() =>{
    history.push('/addIngeener')
  }

  const deleteIngeener =() =>{
    history.push('/deleteIngeener')
  }

  return (
    <>
      <Grid item xs>
        <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h3" color="textPrimary" gutterBottom>
         Менеджер
        </Typography>
          {" "}
          <Button className={classes.btn} onClick={()=>{addIngeener()}} variant="contained" color="primary">
            Добавить инженера
          </Button>
          <Button className={classes.btn} onClick={()=>{deleteIngeener()}} variant="contained" color="secondary">
            Удалить инженера
          </Button>
        </Paper>
      </Grid>
    </>
  );
}

export default ManagerPage;
