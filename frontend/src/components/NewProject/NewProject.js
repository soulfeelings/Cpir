import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EngineersSelect from '../EngineersSelect/EngineersSelect'
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '8px 0 8px 0',
    border: "1px solid gray",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    }
  },
  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection:'column',
  },
  btn: {
    margin: "0 auto"
  }
});

export default function SimpleCard({ info, setNewProjects, newProject, inWorkProjects, setInWorkProjects }) {
  const classes = useStyles();

  const [name, setName] = useState('')

  function handleChange() {
    fetch('/manager', {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({ id: info._id, name })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(data => {
        setNewProjects(newProject.filter(el => el._id !== info._id))
        setInWorkProjects([...inWorkProjects, info])
      })
      .catch((err) => console.log(err))
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {info.address}
        </Typography>
        <Typography variant="h5" component="h2">
          {info.name}
        </Typography>

      </CardContent>
      <CardActions className={classes.body}>
        <EngineersSelect userName={setName} initialName={name} />
        <Button variant={'contained'} onClick={handleChange} size="small">Передать в работу</Button>
      </CardActions>

    </Card>
  );
}
