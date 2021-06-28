import { Container } from "@material-ui/core";
import ProjectCard from "../Project/ProjectCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "2rem",
  },
  title: {
    paddingLeft: "3rem",
  },
  container: {
    padding: "30px",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
   
    backgroundImage: "url(concrete-wall.png)",
    borderRadius: "5px"
  },
  card: {
    fontSize: "2rem",
    "&$hover": {
      boxShadow:
        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    },
    cursor: "pointer",
  },
}));

export default function CenteredGrid({
  done,
  setOpenProject,
  openProject,
  setActiveProject,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Typography
              className={classes.title}
              variant="h5"
              color="textSecondary"
              gutterBottom
            >
              Завершенные проекты
            </Typography>
            <Paper className={classes.paper}>
              {done.map((el) => (
                <ProjectCard
                  className={classes.card}
                  setActiveProject={setActiveProject}
                  setOpenProject={setOpenProject}
                  openProject={openProject}
                  key={el._id}
                  info={el}
                />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
