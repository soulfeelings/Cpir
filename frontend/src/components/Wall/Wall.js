import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


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
  const activeProject = useSelector((state) => state.user.activeProject)
  const classes = useStyles();

  const [binding, setBinding] = useState("");
  const [measure, setMeasure] = useState("");
  const [thickness, setThickness] = useState("");
  const [maxDeviation, setMaxDeviation] = useState("");
  const [conclusion, setConclusion] = useState("");

  function getMeasure(e) {
    setMeasure(e.target.value);
  }

  function getBinding(e) {
    setBinding(e.target.value);
  }

  function getThickness(e) {
    setThickness(e.target.value);
  }

  function saveResult() {
    fetch("/wall/save", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        binding,
        measure,
        thickness,
        maxDeviation,
        conclusion,
        author,
        activeProject
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function getCalculation() {
    const max = Math.floor(thickness / 3);
    setMaxDeviation(max);
    const result =
      measure < max ? "В пределах нормы" : "Отклонение превышает норму";
    setConclusion(result);
  }

  return (<>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="wall"
          height="140"
          image="/br1.jpeg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Расчет отклонения стен
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
            <TextField
              type="text"
              onChange={(e) => getBinding(e)}
              value={binding}
              key="firstWall"
              className={classes.margin}
              id="input-with-icon-textfield1"
              label="Введите привязку"
              placeholder="1-5/A-E"
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
              onChange={(e) => getMeasure(e)}
              value={measure}
              className={classes.margin}
              key="secondWall"
              id="input-with-icon-textfield2"
              label="Вертикальное отклонение"
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
              onChange={(e) => getThickness(e)}
              value={thickness}
              className={classes.margin}
              key="thirdWall"
              id="input-with-icon-textfield3"
              label="Толщина стены"
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
      <Typography
        className={classes.card_result}
        gutterBottom
        variant="h6"
        component="h6"
      >
        {maxDeviation && `Результат: ${conclusion}`}
      </Typography>
      {maxDeviation && (
        <Typography
          className={classes.card_result}
          gutterBottom
          variant="h6"
          component="h6"
        >
          {` Максимальная величина отклонения для указанной толщины стены: ${maxDeviation}мм`}
        </Typography>
      )}
      <CardActions>
        {maxDeviation && (
          <Button
            onClick={() => saveResult()}
            variant="outlined"
            color="primary"
          >
            Сохранить
          </Button>
        )}

        {thickness && (
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
