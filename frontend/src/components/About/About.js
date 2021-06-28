import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
   justifyContent: "space-around",
   
  },
  report: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "80%",
    textAlign: "justify",
    margin: "5rem auto"
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
    margin: "3rem 1rem 0"
  }
});

export default function Report() {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent className={classes.report}>
          <Typography variant="p">
          ООО «ЦПИР «СТРОЙ-ИССЛЕДОВАНИЯ» производит комплекс работ по разработке проектно-сметной документации по капитальному ремонту и реконструкции зданий и сооружений. Также организация имеет направление на разработку проектной документации по ликвидации последствий чрезвычайной ситуации. 
Специалистами организации ООО «ЦПИР «СТРОЙ-ИССЛЕДОВАНИЯ» выполняются следующие виды работ: 
1. Инженерно-техническое обследование основных строительных конструкций зданий сооружений. Инженерно-техническое обследование может разрабатываться для решения следующих задач:
- определение фактического состояния основных строительных конструкций;
- предполагаемая надстройка здания или сооружения; 
- предполагаемое выполнение капитального ремонта или реконструкции здания;
- ликвидация последствий чрезвычайной ситуации (частичное обрушение здания, взрыв, пожар);
- перепланировка помещений;
 2. Разработка проектной и рабочей документации на выполнение работ связанных с капитальным ремонтом и реконструкции здания. Также организация занимается разработкой индивидуальных рабочих проектов связанных с усилением следующих конструкций:
- усиление грунтов основания и конструкции фундаментов; 
-  усиление несущих и самонесущих стен здания и сооружения;
- усиление конструкции междуэтажного перекрытия и покрытия;
- усиление конструкции крыши (стропильная система, кровельное покрытие).
Наша организация обладает всеми необходимо СРО для выполнения работ связанных с разработкой инженерно-технических обследований зданий и сооружений, а также для разработке проектно-сметной документации. 
          </Typography>
          <Button className={classes.btn} component={Link} to="/" variant="outlined" color="primary">
            На главную
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
