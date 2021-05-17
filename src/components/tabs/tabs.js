import "./tabs.css";
import React, { useState } from "react";
import Project from "../slider/slider";

function TabPanel({ setModal }) {
  const [show, setShow] = useState(0);
  const [tabproject, setTabproject] = useState();
  const [tababout, setTababout] = useState();
  const [tabresume, setTabresume] = useState();

  const showProject = () => {
    setShow(0);
  };
  const showAbout = () => {
    setShow(4);
  };
  const showResume = () => {
    setShow(5);
  };

  return (
    <div className="tabs">
      <div className="divbtntabs">
        <button className={`btntabs btn1 ${tabproject} `} onClick={showProject}>
          פרוייקטים
        </button>
        <button className={`btntabs btn2 ${tababout} `} onClick={showAbout}>
          על עצמי
        </button>
        <button className={`btntabs btn3 ${tabresume} `} onClick={showResume}>
          התמחות
        </button>
      </div>
      <div>
        <Project
          setModal={setModal}
          setTabproject={setTabproject}
          setTababout={setTababout}
          setTabresume={setTabresume}
          show={show}
        />
      </div>
    </div>
  );
}

export default TabPanel;
