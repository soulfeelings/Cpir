import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  boxUp: {
    height: "50vh",
    display: "flex",
  },
  logo: {
    width: 240,
  },
  containerInnerUp: {
    display: "flex",
    flexDirection: "row",
   
   
    flexWrap: "wrap",
    height: "50vh",
  },
  containerInnerDown: {
    display: "flex",
    flexDirection: "row",
    
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card1: {
    margin: ".5rem",
    minHeight: "540px",
    flexBasis: 250,
    flexGrow: 1,
    alignSelf: "center",
    marginTop: "5rem",
  },
  leftSide: {
    fontSize: "1rem",
    height: "100%",
    flexBasis: 100,
    flexGrow: 1,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  btnMainLeft: {
    width: "50%",
    backgroundColor: "rgb(245 0 87)",
    color: "rgb(250 250 250) !important",
    "&:hover": {
      backgroundColor: "rgb(245 0 87)",
      color: "rgb(250 250 250) !important",
    }
  },
  up: {
    maxWidth: "100%",
    margin: 0,
    padding: 0,
    minHeight: "50vh",
    backgroundImage: "url(cubes.png)",
  },
  down: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    margin: 0,
    padding: 0,
    minHeight: "50vh",
    backgroundColor: "#393b3a",
    backgroundImage: "url(carbon-fibre-big.png)",
  },
  media: {
    height: 260,
    backgroundImage: "url(/g.jpg)",
    flexBasis: 100,
    flexGrow: 1,
    border: "10px solid gray",
    alignSelf: "center",
  },
  mediaMain: {
    width: "26%",
    maxHeight: "50%",
    backgroundImage: "url(/g.jpg)",
    flexBasis: 100,
    flexGrow: 1,
    border: "10px solid gray",
    alignSelf: "center",
  },
  upRight: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    height: "100%",
    flexBasis: 100,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  "@media screen and (max-width: 767px)": {
    containerInnerUp: {
      maxHeight: "35vh",
    },
    up: {

      minHeight: "60vh",

    },
    upRight: {
      display: "none",
    },
    leftSide: {
      fontSize: ".81rem",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignSelf: "center",
      textAlign: "center",
      color: "#333",
    },
    btnMainLeft: {
      width: "80%",
      margin: ".9rem 0",
      color: "rgb(250 250 250) !important",
      backgroundColor: "rgb(245 0 87)"
    }
  },
  "@media screen and (max-width: 413px)": {

    up: {
      minHeight: "50vh",
    }
  },
  "@media screen and (max-width: 500px)": {

    up: {
      minHeight: "40vh",
    }
  },
  "@media screen and (max-width: 375px)": {
    up: {
      minHeight: "50vh",
    },
    btnMainLeft: {
      margin: "1.9rem 0",
    }
  },
  "@media screen and (max-width: 320px)": {
    up: {
      minHeight: "60vh",
    },
    btnMainLeft: {
      margin: "1.9rem 0",
    }
  },
  imgUpRight: {
    border: "10px solid gray",
    borderRadius: "6px",
    width: "85%",
    alignItems: "center"
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.up}>
        <Container className={classes.containerInnerUp}>
          <Typography
            className={classes.leftSide}
            variant="body2"
            color="primary"
            component="span"
          >
            <img
              className={classes.logo}
              src="cpir-removebg-preview.png"
              alt="logoimg"
            />
            ООО «ЦПИР «СТРОЙ-ИССЛЕДОВАНИЯ» производит комплекс работ по разработке проектно-сметной документации по капитальному ремонту и реконструкции зданий и сооружений. Также организация имеет направление на разработку проектной документации по ликвидации последствий чрезвычайной ситуации. 
            <Button
              className={classes.btnMainLeft}
              size="large"
              color="primary"
              variant="outlined"
              component={Link}
              to="/clientform"
            >
              Оставить заявку
            </Button>
          </Typography>

          <Typography
            className={classes.upRight}
            variant="body2"
            color="textSecondary"
            component="span"
          >
            <img className={classes.imgUpRight} src="/4.jpg" alt="cityimg" />
          </Typography>
        </Container>
      </Container>

      <Container className={classes.down}>
        <Container className={classes.containerInnerDown}>
          <Card className={classes.card1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="6.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Школа
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Техническое заключение о состоянии основных строительных конструкций здания, расположенного по адресу: г. Саратов, ул. Советская, 10 лит. В.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.card1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="5.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Многоквартирный дом
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">

                Техническое заключение о состоянии объекта капитального строительства (дом от 6 этажей и выше),со встроенными и (или) встроенно-пристроенными нежилыми помещениями (1 этап строительства), расположенного по адресу г.Саратов, ул. Гвардейская.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.card1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="2.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Центр народного творчества «Дружба»
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Техническое заключение о состоянии конструкции наружных стЕн нежилого здания, расположенного по адресу: Саратовская область, г. Энгельс, УЛ. ломоносова, ДОМ № 21а.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className={classes.card1}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="3.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Дом культуры УДАРНИК
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Заключение о состоянии основных строительных контсрукций здания Муниципального учреждения, расположенного по адресу: Саратовская область, г. Энгельс, ул. Воронежская, д. № 56.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Main;




