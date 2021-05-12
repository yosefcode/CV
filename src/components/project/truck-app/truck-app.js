import React, { useState } from "react";
import "./truck-app.css";
import "../project.css";
import GetAppIcon from "@material-ui/icons/GetApp";

import screen1 from "./2.jpg";
import screen2 from "./5.jpg";

export default ({ setModal }) => {
  const download = (
    <GetAppIcon
      className="download"
      style={{ fontSize: "3vw" }}
      onClick={(e) => {
        if (!e) e = window.event;
        e.stopPropagation();
        window.open(
          "https://drive.google.com/file/d/1KxdFBtFAFA2_cJurjiT5Hz9PwVdGh336/view?usp=sharing"
        );
      }}
    />
  );

  return (
    <div
      className="divall truckapp"
      onClick={() => {
        setModal(true);
      }}
    >
      <div className="title" dir="rtl">
        <h2> APP - Android</h2>
        <h3> Front-End</h3>
        אפליקציה לאנדרואיד נבנתה בריאקט נייטיב. <br />
        {/* <br /> */}
        <li>LOGIN</li>
        <li>דיווח תחילת עבודה</li>
        <li>דיווח מיקום</li>
        <li>דיווח פעולות במהלך היום</li>
        <li>מצלמה </li>
        <li>סיכומי יום עבודה </li>
        <br />
        <br />
        <br />
      </div>
      <div className="divuser title">
        <li>USER - 111 </li>
        <li>PASSWORD - 1</li>
      </div>
      {download}

      <img className="img1 imgapp" src={screen1} />
      <img className="img2 imgapp" src={screen2} />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} />
        <img className="imglogo" src={"css.png"} />
        {/* <img className="imglogo" src={"react.png"} /> */}
        <img className="imglogo" src={"native.png"} />
      </div>
    </div>
  );
};
