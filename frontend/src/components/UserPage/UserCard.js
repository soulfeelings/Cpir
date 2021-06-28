import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import jsPDF from 'jspdf';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 14,
  },
  body: {
    fontSize: '16px',
  },
  action: {
    display: "flex",
    justifyContent: "space-around"
  }
});

export default function UserCard({ elem }) {
  const classes = useStyles();

  const result = `
  Экспресс анализ

  по результатам визуального осмотра конструкции несущих стен и
  перекрытий ${elem?.objectType}, расположенного по адресу: ${
    elem?.address
  }

  ${
    elem?.startDate
  } специалистами ООО "ЦПИР "Строй-Исследования" был произведен
  визуальный осмотр конструкции несущих стен ${
    elem?.objectType
  }, расположенного по
  адресу: ${elem?.address}.

  На проведение обследования имеется выписка из реестра членов саморегулируемой
  организации № 00394 от 20.07.2020 года, выданная Ассоциацией "Национальное
  объединение изыскателей "Альянс Развитие" (Ассоциация "НОИ "АР").

  Также на проведение обследования и разработку проектной документации имеется
  выписка из реестра членов саморегулируемой организации № 00392 от 20.07.2020 года,
  выданная Ассоциацией "Национальное объединение Проектировщиков "Альянс
  Развитие" (Ассоциация "НОП "АР").

  По результатам визуального осмотра несущих стен тип стен:
  - ${elem?.wallType}
  - ${elem?.wallDamage}
  По результатам визуального осмотра кровли: ${elem?.roofDamage}.
  По результатам визуального осмотра перекрытий: ${elem?.beamWater}.

  По результатам инструментального обследования здания:
  - Прогиб плит (балок) перекрытия: ${elem?.beam[0]?.result} (${
    elem?.beam[0]?.deflection
  }).
  - Вертикальное отклонение стен: ${elem?.wall[0]?.conclusion}
  - Прочностные характеристики бетона соответствуют: ${
    elem?.concrete[0]?.binding
  }

  Учитывая результаты визуального осмотра, результаты инструментального 
  обследования здания, можно сделать вывод, что на момент проведения Экспресс анализа  
  пространственная жесткость здания ${
    elem?.beam[0]?.result !== "Недопустимый прогиб" &&
    elem?.wall[0]?.conclusion === "В пределах нормы" &&
    elem?.concrete[0]?.binding
      ? "обеспечена"
      : "не обеспечена"
  } в достаточной 
  степени.
  ${
    elem?.beam[0]?.result === "Недопустимый прогиб" ||
    elem?.wall[0]?.conclusion !== "В пределах нормы"
      ? "По результатам вышесказанного, а также по результатам ознакомления с архивными данными, \n можно сделать следующий вывод: \n - рекомендуется установить мониторинг за состоянием конструкции стен.  \n Данный мониторинг необходим для исключения, либо подтверждения,  \n наличия неравномерных деформаций конструкции фундаментов и несущих конструкций.  \nМинимальный срок проведения мониторинга составляет 6 месяцев. \n После проведения мониторинга необходимо принять решение по проведению дальнейших инженерных изысканий. \n - рекомендуется выполнить инженерно-геологические изыскания с целью  \n определения физико-механических свойств грунтов"
      : ""
  }

  Инженер: ${elem?.executor?.name[0].toUpperCase() +
    elem?.executor?.name.slice(1) + " " +  elem?.executor?.surName[0].toUpperCase() +
      elem?.executor?.surName.slice(1)}

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
    <Card className={classes.root}>
      <CardContent>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Адрес: {elem.address} 
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Исполнитель: {elem.executor?.name ? elem.executor.name[0].toUpperCase() + elem.executor.name.slice(1) : "Не назначен"}
        </Typography>

      </CardContent>

      <CardActions className={classes.action}>

        <Typography className={classes.body} color="textSecondary" gutterBottom>
          Статус: {elem?.status === 'done' ? "завершен" : ""}
          {elem?.status === 'new' ? "обработка" : ""}
          {elem?.status === 'work' ? "в работе" : ""}
        </Typography>
        {elem.managed && <Button
                  className={classes.btn}
                  onClick={() => saveReport()}
                  variant="outlined"
                  color="primary"
                >
                  Скачать PDF
                </Button>}
      </CardActions>
    </Card>
  );
}
