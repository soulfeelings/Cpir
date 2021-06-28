import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  row: {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  left: {
    flexBasis: "35%",
    flexGrow: 1,
    margin: "0 1rem 0 1rem",
    '@media screen and (max-width: 1100px)': {
      flexBasis: "75%",
    },
  },
  right: {
    flexBasis: "35%",
    flexGrow: 1,
    margin: "0 1rem 0 1rem",
  },
  divSendProjectMain: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  inputReact: {
    margin: "10px 0",
    border: 0,
    background: "#f4f4f4",
    width: "100%",
    lineHeight: "1.35em",
    color: "#000",
  },
  header: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    margin: ".5rem",
    "&:hover": {
      backgroundColor: "#3b3680",
      color: "#ffffff"
    },
    "&:active": {
      backgroundColor: "#368080",
    },
  },
  divBtn: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "2rem",
  },
}));

function SendProject({ stat }) {
  const projectId = useSelector((state) => state.project.id);
  const projectId2 = useSelector((state) => state.user.activeProject);
  const history = useHistory();
  const [result, setResult] = useState(false)

  const [nameOrganization, setNameOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [thirdName, setThirdName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [objectType, setObjectType] = useState("");
  const [wallType, setWallType] = useState("");
  const [wallDamage, setWallDamage] = useState("");
  const [roofDamage, setRoofDamage] = useState("");
  const [wallWater, setWallWater] = useState("");
  const [beamWater, setBeamWater] = useState("");
  const [otherDefects, setOtherDefects] = useState("");
  const [recommendMonitoring, setRecommendMonitoring] = useState("");
  const [recommendGeological, setRecommendGeological] = useState("");

  function saveProjectInfo() {

    fetch("/engineer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameOrganization,
        address,
        email,
        phone,
        name,
        surName,
        thirdName,
        startDate,
        objectType,
        wallType,
        wallDamage,
        roofDamage,
        wallWater,
        beamWater,
        otherDefects,
        recommendMonitoring,
        recommendGeological,
        projectId2,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    function getProject() {
      fetch("/projects")
        .then((res) => res.json())
        .then((data) => {

          if (data.length === 0) {
            throw new Error('');

          } else {
            return data;
          }
        })
        .then((data) => {
          if (projectId !== null) {

            return data.filter(el => el._id === projectId)
          } else {
            return data.filter(el => el._id === projectId2)
          }
        })
        .then((dataEnd) => {
          dataEnd[0].nameOrganization ? setNameOrganization(dataEnd[0].nameOrganization) : setNameOrganization("");
          dataEnd[0].address ? setAddress(dataEnd[0].address) : setAddress("");
          dataEnd[0].email ? setEmail(dataEnd[0].email) : setEmail("");
          dataEnd[0].phone ? setPhone(dataEnd[0].phone) : setPhone("");
          dataEnd[0].name ? setName(dataEnd[0].name) : setName("")
          dataEnd[0].surName ? setSurName(dataEnd[0].surName) : setSurName("")
          dataEnd[0].thirdName ? setThirdName(dataEnd[0].thirdName) : setThirdName("")
          dataEnd[0].startDate ? setStartDate(dataEnd[0].startDate) : setStartDate("")
          dataEnd[0].objectType ? setObjectType(dataEnd[0].objectType) : setObjectType("")
          dataEnd[0].wallType ? setWallType(dataEnd[0].wallType) : setWallType("")
          dataEnd[0].wallDamage ? setWallDamage(dataEnd[0].wallDamage) : setWallDamage("")
          dataEnd[0].roofDamage ? setRoofDamage(dataEnd[0].roofDamage) : setRoofDamage("")
          dataEnd[0].wallWater ? setWallWater(dataEnd[0].wallWater) : setWallWater("")
          dataEnd[0].beamWater ? setBeamWater(dataEnd[0].beamWater) : setBeamWater("")
          dataEnd[0].otherDefects ? setOtherDefects(dataEnd[0].otherDefects) : setOtherDefects("")
          dataEnd[0].recommendMonitoring ? setRecommendMonitoring(dataEnd[0].recommendMonitoring) : setRecommendMonitoring("")
          dataEnd[0].recommendGeological ? setRecommendGeological(dataEnd[0].recommendGeological) : setRecommendGeological("")
        })
        .catch((err) => err)
    }
    getProject()

    setResult(true)

    return () => {
      setResult(false)
    }

  }, [projectId, projectId2])


  function enEnstruments() {
    history.push("/instruments");
  }

  const classes = useStyles();

  const formAddProject = useRef();



  const inputHandlearClear = (event) => {
    event.preventDefault();
    setNameOrganization("");
    setAddress("");
    setEmail("");
    setPhone("");
    setName("")
    setSurName("")
    setThirdName("")
    setStartDate("")
    setObjectType("")
    setWallType("")
    setWallDamage("")
    setRoofDamage("")
    setWallWater("")
    setBeamWater("")
    setOtherDefects("")
    setRecommendMonitoring("")
    setRecommendGeological("")
  };

  return (<>
    {result &&
      <div id="sendProject" className={classes.divSendProjectMain}>
        <header className={classes.header}>
          <h2>Паспорт объекта</h2>
        </header>
        <form className={classes.row}
          ref={formAddProject}
        >
          <div className={classes.row}>
            <div className={classes.left}>
              <Typography
                className={classes.title}
                variant="h5"
                color="primary"
                gutterBottom
              >
                Данные клиента
              </Typography>
              <TextField
                onChange={(e) => setNameOrganization(e.target.value)}
                value={nameOrganization}
                className={classes.inputReact}
                type="text"
                name="nameOrganization"
                id="outlined-basic7"
                label="Организация *"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setSurName(e.target.value)}
                value={surName}
                className={classes.inputReact}
                type="text"
                name="surName"
                id="outlined-basic1"
                label="Фамилия"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={classes.inputReact}
                type="text"
                name="name"
                id="outlined-basic2"
                label="Имя"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setThirdName(e.target.value)}
                value={thirdName}
                className={classes.inputReact}
                type="text"
                name="thirdName"
                id="outlined-basic3"
                label="Отчество"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className={classes.inputReact}
                type="email"
                name="email"
                id="outlined-basic4"
                label="Почта"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className={classes.inputReact}
                type="number"
                name="phone"
                id="outlined-basic5"
                label="Телефон"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className={classes.inputReact}
                type="text"
                name="address"
                id="outlined-basic6"
                label="Адрес объекта"
                variant="outlined"
              />
            </div>

            <div className={classes.right}>
              {/* для менеджера */}
              <Typography
                className={classes.title}
                variant="h5"
                color="primary"
                gutterBottom
              >
                Данные инженера
              </Typography>
              <TextField
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
                className={classes.inputReact}
                type="date"
                name="startDate"
                id="outlined-basic6"
                // label="Назначить дату обследования "
                variant="outlined"
              />
              {/* <TextField className={classes.inputReact} type="text" name="executor" id="outlined-basic6" label="Назначить инженера " variant="outlined" /> */}
              {/* для инженера */}
              <TextField
                onChange={(e) => setObjectType(e.target.value)}
                value={objectType}
                className={classes.inputReact}
                type="text"
                name="objectType"
                id="outlined-basic6"
                label="Тип объекта"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setWallType(e.target.value)}
                value={wallType}
                className={classes.inputReact}
                type="text"
                name="wallType"
                id="outlined-basic6"
                label="Тип стен"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setWallDamage(e.target.value)}
                value={wallDamage}
                className={classes.inputReact}
                type="text"
                name="wallDamage"
                id="outlined-basic6"
                label="Визуальные повреждения несущих стен"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setRoofDamage(e.target.value)}
                value={roofDamage}
                className={classes.inputReact}
                type="text"
                name="roofDamage"
                id="outlined-basic6"
                label="Визуальные повреждения кровли"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setWallWater(e.target.value)}
                value={wallWater}
                className={classes.inputReact}
                type="text"
                name="wallWater"
                id="outlined-basic6"
                label="Визуальные следы замачивания несущих стен"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setBeamWater(e.target.value)}
                value={beamWater}
                className={classes.inputReact}
                type="text"
                name="beamWater"
                id="outlined-basic6"
                label="Визуальные следы замачивания перекрытий"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setOtherDefects(e.target.value)}
                value={otherDefects}
                className={classes.inputReact}
                type="text"
                name="otherDefects"
                id="outlined-basic6"
                label="Иные дефекты"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setRecommendMonitoring(e.target.value)}
                value={recommendMonitoring}
                className={classes.inputReact}
                type="text"
                name="recommendMonitoring"
                id="outlined-basic6"
                label="Рекомендации установки мониторинга"
                variant="outlined"
              />
              <TextField
                onChange={(e) => setRecommendGeological(e.target.value)}
                value={recommendGeological}
                className={classes.inputReact}
                type="text"
                name="recommendGeological"
                id="outlined-basic6"
                label="Рекомендации геологичексих изысканий"
                variant="outlined"
              />
            </div>
          </div>
          <div className={classes.divBtn}>
            <Button variant="contained" onClick={saveProjectInfo} type="submit" className={classes.btn}>
              Сохранить
            </Button>
            <Button variant="contained"
              onClick={(event) => {
                inputHandlearClear(event);
              }}
              className={classes.btn}
            >
              Очистить
            </Button>
            <Button variant="contained" onClick={enEnstruments} className={classes.btn}>
              Инструменты
            </Button>
            <Button className={classes.btn} variant="contained" component={Link} to="/profile" >
              Назад в кабинет
            </Button>

          </div>
        </form>

      </div>

    }
  </>
  );
}

export default SendProject;


