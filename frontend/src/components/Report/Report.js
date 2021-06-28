import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container, CssBaseline } from "@material-ui/core";
import { Button } from "@material-ui/core";
import jsPDF from "jspdf";

const useStyles = makeStyles({
  root: {
    fontFamily: "GOST_type_A",
    minWidth: 275,
    display: "flex",
    justifyContent: "center",
    textAlign: "justify",
    fontSize: "18px",
    textIndent: "20px",
  },
  header: {
    margin: "auto",
    display: "flex",
    maxWidth: "max-content",
  },
  report: {
    display: "flex",
    maxWidth: "800px",
    flexDirection: "column",
    alignContent: "center",
    marginTop: "70px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    margin: ".7rem auto",
  },
  btnContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "2rem 0"
  }
});

export default function Report({
  setOpenProject,
  setActiveProject,
  activeProject,
}) {
  const classes = useStyles();

  const [findProject, setFindProject] = useState(null);

  const setFunc = () => {
    setActiveProject(null);
    setOpenProject(false);
  };

  useEffect(() => {
    async function getProject() {
      const response = await fetch("/projects");

      const result = await response.json();

      setFindProject(result.filter((el) => el._id === activeProject)[0]);
    }

    getProject();

    return () => {
      setOpenProject(false);
    };
  }, [activeProject, setOpenProject]);

  function getPerson() {
    fetch("/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: findProject.email,
        data: result,
        id: activeProject
      }),
    });
  }

  const result = `
  Экспресс анализ

  по результатам визуального осмотра конструкции несущих стен и
  перекрытий ${findProject?.objectType}, расположенного по адресу: ${
    findProject?.address
  }

  ${
    findProject?.startDate
  } специалистами ООО "ЦПИР "Строй-Исследования" был произведен
  визуальный осмотр конструкции несущих стен ${
    findProject?.objectType
  }, расположенного по
  адресу: ${findProject?.address}.

  На проведение обследования имеется выписка из реестра членов саморегулируемой
  организации № 00394 от 20.07.2020 года, выданная Ассоциацией "Национальное
  объединение изыскателей "Альянс Развитие" (Ассоциация "НОИ "АР").

  Также на проведение обследования и разработку проектной документации имеется
  выписка из реестра членов саморегулируемой организации № 00392 от 20.07.2020 года,
  выданная Ассоциацией "Национальное объединение Проектировщиков "Альянс
  Развитие" (Ассоциация "НОП "АР").

  По результатам визуального осмотра несущих стен тип стен:
  - ${findProject?.wallType}
  - ${findProject?.wallDamage}
  По результатам визуального осмотра кровли: ${findProject?.roofDamage}.
  По результатам визуального осмотра перекрытий: ${findProject?.beamWater}.

  По результатам инструментального обследования здания:
  - Прогиб плит (балок) перекрытия: ${findProject?.beam[0]?.result} (${
    findProject?.beam[0]?.deflection + "мм"
  }).
  - Вертикальное отклонение стен: ${findProject?.wall[0]?.conclusion}
  - Прочностные характеристики бетона соответствуют: ${
    findProject?.concrete[0]?.binding
  }

  Учитывая результаты визуального осмотра, результаты инструментального 
  обследования здания, можно сделать вывод, что на момент проведения Экспресс анализа  
  пространственная жесткость здания ${
    findProject?.beam[0]?.result !== "Недопустимый прогиб" &&
    findProject?.wall[0]?.conclusion === "В пределах нормы" &&
    findProject?.concrete[0]?.binding
      ? "обеспечена"
      : "не обеспечена"
  } в достаточной 
  степени.
  ${
    findProject?.beam[0]?.result === "Недопустимый прогиб" ||
    findProject?.wall[0]?.conclusion !== "В пределах нормы"
      ? "По результатам вышесказанного, а также по результатам ознакомления с архивными данными, \n можно сделать следующий вывод: \n - рекомендуется установить мониторинг за состоянием конструкции стен.  \n Данный мониторинг необходим для исключения, либо подтверждения,  \n наличия неравномерных деформаций конструкции фундаментов и несущих конструкций.  \nМинимальный срок проведения мониторинга составляет 6 месяцев. \n После проведения мониторинга необходимо принять решение по проведению дальнейших инженерных изысканий. \n - рекомендуется выполнить инженерно-геологические изыскания с целью  \n определения физико-механических свойств грунтов"
      : ""
  }

  Инженер: ${findProject?.executor?.name[0].toUpperCase() +
    findProject?.executor?.name.slice(1) + " " +  findProject?.executor?.surName[0].toUpperCase() +
      findProject?.executor?.surName.slice(1)}

  `;
  const saveReport = async () => {
    let doc = new jsPDF();
    await doc.addFont("PTSans-Regular.ttf", "PTSans", "normal");
    await doc.setFont("PTSans");
    await doc.setFontSize(10);
    await doc.text(result, 15, 15);
    await doc.save("report.pdf");
  };

  return (
    <>
      {findProject && (
        <Container>
          <CssBaseline />
          <Card className={classes.root}>
            <CardContent className={classes.report}>
              <Typography className={classes.header} variant="h4">
                Экспресс анализ ‎
              </Typography>
              <br />
              <Typography variant="inherit">
                по результатам визуального осмотра конструкции несущих стен и
                перекрытий {findProject?.objectType}, расположенного по адресу:{" "}
                {findProject?.address}. ‎
              </Typography>
              <br />
              <Typography variant="inherit">
                {findProject?.startDate} специалистами ООО "ЦПИР
                "Строй-Исследования" был произведен визуальный осмотр
                конструкции несущих стен {findProject?.objectType},
                расположенного по адресу: {findProject?.address}.
              </Typography>
              <br />
              <Typography variant="inherit">
                На проведение обследования имеется выписка из реестра членов
                саморегулируемой организации № 00394 от 20.07.2020 года,
                выданная Ассоциацией "Национальное‎ объединение изыскателей
                "Альянс Развитие" (Ассоциация "НОИ "АР").‎
                <br />‎
              </Typography>
              <Typography variant="inherit">
                ‎Также на проведение обследования и разработку проектной
                документации имеется выписка из реестра членов саморегулируемой
                организации № 00392 от 20.07.2020 года, выданная Ассоциацией
                "Национальное объединение Проектировщиков "Альянс‎ Развитие"
                (Ассоциация "НОП "АР").‎
              </Typography>
              <br />
              <Typography variant="inherit">
                По результатам визуального осмотра несущих стен тип стен:
                <br />- {findProject?.wallType}
                <br />- {findProject?.wallDamage}
                <br />
                <br />
                По результатам визуального осмотра кровли:{" "}
                {findProject?.roofDamage}.<br />
                По ‎результатам визуального осмотра перекрытий:{" "}
                {findProject?.beamWater}.‎
              </Typography>
              <br />

              <Typography variant="inherit">
                По результатам инструментального обследования здания:‎
                <br />
                ‎-‎ Прогиб плит (балок) перекрытия:{" "}
                {findProject?.beam[0]?.result} (
                {findProject?.beam[0]?.deflection})мм.
                <br />
                ‎-‎ Вертикальное отклонение стен:{" "}
                {findProject?.wall[0]?.conclusion}‎<br />
                ‎-‎ Прочностные характеристики бетона соответствуют:{" "}
                {findProject?.concrete[0]?.binding}
              </Typography>
              <br />

              <Typography variant="inherit">
                Учитывая результаты визуального осмотра, результаты
                инструментального ‎ обследования здания, можно сделать вывод,
                что на момент проведения Экспресс анализа ‎ пространственная
                жесткость здания{" "}
                {findProject?.beam[0]?.result !== "Недопустимый прогиб" &&
                findProject?.wall[0]?.conclusion === "В пределах нормы" &&
                findProject?.concrete[0]?.binding
                  ? "обеспечена"
                  : "не обеспечена"}{" "}
                в достаточной ‎ степени.
                {findProject?.beam[0]?.result === "Недопустимый прогиб" ||
                findProject?.wall[0]?.conclusion !== "В пределах нормы" ||
                findProject?.concrete[0]?.binding ? (
                  <Typography variant="inherit">
                    <br />
                    По результатам вышесказанного, а также по результатам
                    ознакомления с архивными ‎ данными, можно сделать следующий
                    вывод:‎
                    <br />
                    ‎- рекомендуется установить мониторинг за состоянием
                    конструкции стен .Данный ‎ мониторинг необходим для
                    исключения, либо подтверждения, наличия неравномерных ‎
                    деформаций конструкции фундаментов и несущих конструкций.
                    Минимальный срок ‎ проведения мониторинга составляет 6
                    месяцев. После проведения мониторинга ‎ необходимо принять
                    решение по проведению дальнейших инженерных изысканий.‎
                    <br />
                    ‎- рекомендуется выполнить инженерно-геологические изыскания
                    с целью определения ‎ физико-механических свойств грунтов.
                  </Typography>
                ) : (
                  ""
                )}
              </Typography>
              <br />

              <Typography variant="h5">
                Инженер:{" "}
                {findProject?.executor?.name[0].toUpperCase() +
                  findProject?.executor?.name.slice(1) + " " +  findProject?.executor?.surName[0].toUpperCase() +
                    findProject?.executor?.surName.slice(1)}
                ‎
              </Typography>
              <Container className={classes.btnContainer}>
                <Button
                  className={classes.btn}
                  onClick={() => saveReport()}
                  variant="outlined"
                  color="primary"
                >
                  Скачать PDF
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.btn}
                  onClick={getPerson}
                 
                >
                  Отправить заказчику
                </Button>

                <Button
                  className={classes.btn}
                  onClick={() => setFunc()}
                  variant="outlined"
                  color="primary"
                >
                  Назад в кабинет
                </Button>
              </Container>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  );
}
