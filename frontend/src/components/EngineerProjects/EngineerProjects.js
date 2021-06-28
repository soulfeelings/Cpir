import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BtnEndProject from '../BtnEndProject/BtnEndProject'
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { activeProject } from '../../redux/thunks/activeProject';
import { useSelector } from 'react-redux';



const useStyles = makeStyles({
  root: {
    marginBottom: '3rem',
    cursor: "pointer",

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ info, setProject, project }) {
  const classes = useStyles();
  const history = useHistory();

  const dispatch = useDispatch()
  const id = useSelector(state => state.user.id)

  function enForm() {
    dispatch(activeProject({ projectId: info._id, userId: id }))
    history.push('/engineerform');
  }
  return (
    <Card className={classes.root}>
      <CardContent onClick={enForm}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {info.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {info.address}
        </Typography>
      </CardContent>

      <BtnEndProject id={info._id} project={project} setProject={setProject} />

    </Card>
  );
  }


