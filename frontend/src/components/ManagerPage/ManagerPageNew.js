
import NewProject from "../NewProject/NewProject";
import { Container } from "@material-ui/core";

import Typography from '@material-ui/core/Typography';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  title: {
    paddingLeft: "3rem"
  },
  container: {
    padding: "30px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: "url(concrete-wall.png)",
    borderRadius: "5px"
  },
}));

export default function CenteredGrid({ newProject, setNewProjects, setInWorkProjects, inWorkProjects }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
              Новые проекты
            </Typography>
            <Paper className={classes.paper}>{
              newProject.map((el) => <NewProject newProject={newProject} setInWorkProjects={setInWorkProjects} inWorkProjects={inWorkProjects} setNewProjects={setNewProjects} key={el._id} info={el} />
              )
            }</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
