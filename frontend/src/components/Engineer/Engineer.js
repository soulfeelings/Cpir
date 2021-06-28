import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import EngineerProjects from "../EngineerProjects/EngineerProjects";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: "2rem auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    gap: "10px",
    backgroundImage: "url(outlets.png)"
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const id = useSelector((state) => state.user.id);

  const [project, setProject] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("/projects");
      const result = await response.json();
      setProject(
        result.filter((el) => el.executor?._id === id && el.status !== "done")
      );
    };
    getProjects();
  }, [id]);

  return (
    <>
      {project && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Typography
              className={classes.title}
              variant="h3"
              align="center"
              color="primary"
            >
              Инженер
            </Typography>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  align="center"
                  color="textPrimary"
                >
                  Закрепленные проекты
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>
                {project.map((el) => (
                  <EngineerProjects
                    key={el._id}
                    project={project}
                    setProject={setProject}
                    info={el}
                  />
                ))}
              </Paper>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
}




