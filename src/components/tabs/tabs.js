import "./tabs.css";
import React, { useState } from "react";
import Resume from "../resume/resume";
import About from "../about/about";
import Project from "../project/project";

function TabPanel({ setModal }) {
  const [project, setProject] = useState(true);
  const [about, setAbout] = useState(false);
  const [resume, setResume] = useState(false);

  const showProject = () => {
    setProject(true);
    setAbout(false);
    setResume(false);
  };
  const showAbout = () => {
    setProject(false);
    setAbout(true);
    setResume(false);
  };
  const showResume = () => {
    setProject(false);
    setAbout(false);
    setResume(true);
  };

  return (
    <div className="tabs">
      <div className="divbtntabs">
        <button className="btntabs btn1" onClick={showProject}>
          פרוייקטים
        </button>
        <button className="btntabs btn2" onClick={showAbout}>
          על עצמי
        </button>
        <button className="btntabs btn3" onClick={showResume}>
          התמחות
        </button>
      </div>
      <div>
        {project && <Project setModal={setModal} />}
        {about && <About />}
        {resume && <Resume />}{" "}
      </div>
    </div>
  );
}

export default TabPanel;
