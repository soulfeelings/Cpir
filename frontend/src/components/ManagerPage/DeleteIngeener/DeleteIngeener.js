import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EngineersSelect from '../../EngineersSelect/EngineersSelect'


const useStyles = makeStyles({
  root:{
    minWidth:'290px',
  },
  rootMains: {
    margin:'auto',
    height:'500px',
    maxWidth:'700px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
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

export default function DeleteIngeener() {
  const classes = useStyles();

  const[name,setName] = useState('')

  const deleteUser = () => {

    fetch('/user',{
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({name})
    })
    .then((res) => res.json())
    .then((data) => console.log('удалено'))
    .catch((err) => console.log(err))
  

  }
  return (
    <Container className={classes.rootMains}>
    <Card className={classes.root}>
      <CardContent>
  
        <Typography variant="h5" component="h2">
          Все инженеры
        </Typography>
        
          <EngineersSelect initialName ={name} userName={setName} status={'true'}/>

      </CardContent>
      <CardActions>
        <Button onClick={() => {deleteUser()}} size="small">Удалить</Button>
      </CardActions>
    </Card>
  </Container>
  );
}
