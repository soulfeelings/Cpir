import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { brands } from "../../lib/consts";
import { useSelector } from "react-redux";

const currencies = [
  {
    value: "Склерометр",
    label: "Склерометр",
  },
  {
    value: "Механический",
    label: "Механический",
  },
  {
    value: "Ультразвуковой",
    label: "Ультразвуковой",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    minHeight: 250,
    margin: "3rem auto",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 50px 40px -7px",
  },
  btnBack: {
    display: "block",
    width: "100px",
    height: "40px",
    margin: "0 auto",
    fontSize: "1rem",
    textAlign: "center",
    backgroundColor: "#ffffff", boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 40px -1px",
    "&:hover": {
      backgroundColor: "#3b3680",
      color: "#ffffff"
    },
    "&:active": {
      backgroundColor: "#368080",
    },
  },
  card_result: {
    marginLeft: "1.3rem",
  },
  option: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
  const author = useSelector((state) => state.user.id);
  const activeProject = useSelector((state) => state.user.activeProject)
  const [binding, setBinding] = useState("");
  const [MPA, setMPA] = useState("");
  const [result, setResult] = useState("");
  const [currency, setCurrency] = React.useState("Механический");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  function saveResult() {
    fetch("/concrete/save", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        binding,
        MPA,
        grade: result.brand,
        classC: result.classC,
        instrument: currency,
        author,
        activeProject
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function getBinding(e) {
    setBinding(e.target.value);
  }

  function getMPA(e) {
    setMPA(e.target.value);
  }

  function getCalculation() {
    const result = brands.filter((el) => el.Mpa <= MPA);
    setResult(result[result.length - 1]);
  }

  return (<>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="concrete"
          height="140"
          image="/с6.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Определение марки бетона
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <TextField
              type="text"
              onChange={(e) => getBinding(e)}
              value={binding}
              placeholder="1-5/A-E"
              className={classes.margin}
              id="input-with-icon-textfield1"
              label="Введите привязку"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyboardArrowRightIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="number"
              onChange={(e) => getMPA(e)}
              value={MPA}
              placeholder="MПа"
              className={classes.margin}
              id="input-with-icon-textfield2"
              label="Введите значение"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyboardArrowRightIcon />
                  </InputAdornment>
                ),
              }}
            />

            <form className={classes.option} noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Выберите инструмент"
                  value={currency}
                  onChange={handleChange}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </form>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography
        className={classes.card_result}
        gutterBottom
        variant="h6"
        component="h6"
      > {result && (`Результат: соответствует классу ${result.classC}, марка ${result.brand}`)}
      </Typography>
      <CardActions>
        {result && (
          <Button
            onClick={() => saveResult()}
            variant="outlined"
            color="primary"
          >
            Сохранить
          </Button>
        )}

        {MPA && (
          <Button onClick={() => getCalculation()} variant="outlined">
            Расчет
          </Button>
        )}

      </CardActions>

    </Card>
    <Button
      className={classes.btnBack}
      component={Link} to="/instruments"
      variant="outlined"
      color="primary"
    >
      Назад
    </Button>
  </>
  );
}
