import { makeStyles } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: 300,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnBack: {
    display: "block",
    width: "100px",
    height: "40px",
    margin: "0 auto",
    fontSize: "1rem",
    textAlign: "center",
    backgroundColor: "#ffffff",boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 40px -1px",
    "&:hover": {
      backgroundColor: "#3b3680",
      color: "#ffffff"
    },
    "&:active": {
      backgroundColor: "#368080",
    },
  },
  image: {
    margin: 20,
    width: '40%',
    position: 'relative',
    height: 220,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 180,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    fontSize: 40,
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function HomeView() {
  const classes = useStyles();
  return (<>
    <div className={classes.root}>

      <ButtonBase component={Link} to='/wall'
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}

      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${'wallMain2.jpg'})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {'СТЕНЫ'}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>

      <ButtonBase component={Link} to='/concrete'
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${'concreteMain.jpg'})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {'БЕТОН'}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>

      <ButtonBase component={Link} to='/beam'
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
      >
        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${'beamMain.jpg'})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            className={classes.imageTitle}
          >
            {'БАЛКИ'}
            <span className={classes.imageMarked} />
          </Typography>
        </span>
      </ButtonBase>
    </div>
        <Button
        className={classes.btnBack}
        component={Link} to="/engineerform" 
        variant="contained"
        
      >
        Назад
      </Button>
      </>
  );
}
