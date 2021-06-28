import React, { useState, useEffect } from "react";
import ManagerPageNew from "./ManagerPageNew";
import ManagerPageClosed from "./ManagerPageClosed";
import ManagerPageInWork from "./ManagerPageInWork";
import AddPage from "./AddPage";
import Report from "../Report/Report";
import Divider from '@material-ui/core/Divider';


function ManagerPage(props) {

  const [newProjects, setNewProjects] = useState("");
  const [inWorkProjects, setInWorkProjects] = useState("");
  const [doneProjects, setDoneProjects] = useState(null);
  const [openProject, setOpenProject] = useState(false)
  const [activeProject, setActiveProject] = useState(null)


  useEffect(() => {

    const getProjects = async () => {
      const response = await fetch("/projects");
      const result = await response.json();
      setNewProjects(result.filter((el) => el.status === "new"));
      setInWorkProjects(result.filter((el) => el.status === "work"));
      setDoneProjects(result.filter((el) => el.status === "done"));
      setActiveProject(null)
    };
    getProjects();
  }, []);



  return (
    <>{
      newProjects && inWorkProjects && doneProjects && !openProject ? <><AddPage />
        <ManagerPageNew setNewProjects={setNewProjects} setInWorkProjects={setInWorkProjects} inWorkProjects={inWorkProjects} newProject={newProjects} />
        <Divider  variant="middle"/>
        <ManagerPageInWork inWork={inWorkProjects} />
        <Divider  variant="middle"/>
        <ManagerPageClosed openProject={openProject} setActiveProject={setActiveProject} setOpenProject={setOpenProject} done={doneProjects} /></>
        : <Report activeProject={activeProject} setActiveProject={setActiveProject} setOpenProject={setOpenProject} />
    }
    </>
  );
}

export default ManagerPage;
