import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 360,
    minHeight: 250,
    margin: "3rem auto",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px",
  },
  card_result: {
    marginLeft: "1.3rem",
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
});

export default function ImgMediaCard() {
  const author = useSelector((state) => state.user.id);
  const activeProject = useSelector((state) => state.user.activeProject);
  const classes = useStyles();

  const [result, setResult] = useState("");
  const [deflection, setDeflection] = useState("");
  const [binding, setBinding] = useState("");
  const [firstPoint, setFirstPoint] = useState("");
  const [secondPoint, setSecondPoint] = useState("");
  const [middlePoint, setMiddlePoint] = useState("");
  const [length, setLength] = useState("");

  function getLength(e) {
    setLength(e.target.value);
  }

  function getBinding(e) {
    setBinding(e.target.value);
  }

  function getFirstPoint(e) {
    setFirstPoint(e.target.value);
  }

  function getSecondPoint(e) {
    setSecondPoint(e.target.value);
  }

  function getMiddlePoint(e) {
    setMiddlePoint(e.target.value);
  }

  function saveResult() {
    fetch(`/beam/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        binding,
        firstPoint,
        secondPoint,
        middlePoint,
        length,
        result,
        deflection,
        author,
        activeProject,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function getCalculation(a, b, c, beamLength) {
    const def = Math.floor(((+a + +c) / 2) - +b);
    let count = beamLength <= 6000 ? 30 : 48;
    console.log(def, count, a,b,c ,firstPoint,secondPoint,middlePoint);
    setResult(def > count ? "Недопустимый прогиб" : "В пределах нормы");
    setDeflection(Math.abs(def));
    // setDeflection(Math.abs((a + c) - b));

  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="beam"
            height="140"
            image="/beam.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Расчет прогиба
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              <TextField
                type="text"
                onChange={(e) => getBinding(e)}
                value={binding}
                className={classes.margin}
                id="input-with-icon-textfield1"
                label="Введите привязку"
                placeholder="1-12/A-E"
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
                onChange={(e) => getFirstPoint(e)}
                value={firstPoint}
                className={classes.margin}
                id="input-with-icon-textfield2"
                label="Крайняя точка"
                placeholder="величина в мм"
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
                onChange={(e) => getMiddlePoint(e)}
                value={middlePoint}
                className={classes.margin}
                id="input-with-icon-textfield3"
                label="Средняя точка"
                placeholder="величина в мм"
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
                onChange={(e) => getSecondPoint(e)}
                value={secondPoint}
                className={classes.margin}
                id="input-with-icon-textfield4"
                label="Крайняя точка"
                placeholder="величина в мм"
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
                onChange={(e) => getLength(e)}
                value={length}
                className={classes.margin}
                id="input-with-icon-textfield5"
                label="Длина"
                placeholder="величина в мм"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyboardArrowRightIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        {result && (
          <Typography
            className={classes.card_result}
            gutterBottom
            variant="h6"
            component="h6"
          >
            Результат: {result}
          </Typography>
        )}

        <Typography
          className={classes.card_result}
          gutterBottom
          variant="h6"
          component="h6"
        >
          {result && `Прогиб составил: ${deflection}мм`}
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

          {length && firstPoint && secondPoint && middlePoint && (
            <Button
              onClick={() =>
                getCalculation(firstPoint, middlePoint, secondPoint, length)
              }
              variant="outlined"
            >
              Расчет
            </Button>
          )}
        </CardActions>
      </Card>
      <Button
        className={classes.btnBack}
        component={Link}
        to="/instruments"
        variant="outlined"
        color="primary"
      >
        Назад
      </Button>
    </>
  );
}
