import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields({status, userName, initialName}) {
  const classes = useStyles();
  const [allIngeener, setAllIngeener] = React.useState(null);

useEffect(()=>{
  async function findAllIngeener () {
    const response = await fetch('/user')

    const result = await response.json()

    setAllIngeener(result.userFind.filter(el => el.status === 'engineer'));

  }
  findAllIngeener()

},[])


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          defaultValue=""
          id="standard-select-currency"
          select
          onChange={(e) => userName(e.target.value)}
          value={initialName}
          label={status ? 'Все инженеры' : "Назначить инженера"}
          >
          {
          allIngeener && allIngeener.map((option) => (
          <MenuItem  key={option._id} value={option.name}>
            {option?.name[0]?.toUpperCase() + option.name?.slice(1) + " " + option?.surName[0]?.toUpperCase() + option?.surName?.slice(1)}
          </MenuItem>
        ))}
        </TextField>
       
      </div>

    </form>
  );
}
