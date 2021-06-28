import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import UserCard from "./UserCard";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    marginTop: "40px",
    maxWidth: "800px",
  },
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,

  // },
  gray: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "gray",
  },
  green: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "green",
  },
  yellow: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "yellow",
  },
}));

export default function UserPage({ elem }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Paper className={elem.status === 'done' ? classes.green : elem.status === 'new' ? classes.gray : classes.yellow}>
          <UserCard elem={elem} />
        </Paper>
      </div>
    </div>
  );
}
