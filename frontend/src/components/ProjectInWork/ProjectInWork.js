import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '8px 0 8px 0',
    border: "1px solid gray",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
    }
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

export default function SimpleCard({info}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {info.address}
        </Typography>
        <Typography variant="h5" component="h2">
        {info.name}
        </Typography>
        <Typography variant="h6" component="h5">
        {info.phone}
        </Typography>
      </CardContent>

    </Card>
  );
}
