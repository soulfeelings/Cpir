
import { Container } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectInWork from '../ProjectInWork/ProjectInWork';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
  },
  title: {
    paddingLeft: "3rem"
  },
  container: {
    padding: "30px"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundImage: "url(concrete-wall.png)",
    borderRadius: "5px"
  },
}));

export default function CenteredGrid({inWork}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container  className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs>
        <Typography className={classes.title} variant="h5" color="textSecondary" gutterBottom>
          Объекты в работе
        </Typography>
          <Paper className={classes.paper}>{  
              inWork.map((el) => <ProjectInWork key={el._id} info={el}/>
              )
            }</Paper>
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}
