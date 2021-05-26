import React from "react";
import "./truck-app.css";
import "../slider.css";
import GetAppIcon from "@material-ui/icons/GetApp";

import screen1 from "./2.jpg";
import screen2 from "./5.jpg";

const TruckApp = ({ setModal }) => {
  const download = (
    <GetAppIcon
      className="download"
      style={{ fontSize: "3vw @media only screen and (max-width: 999px)" }}
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

      <img className="img1 imgapp" src={screen1} alt="" />
      <img className="img2 imgapp" src={screen2} alt="" />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} alt="" />
        <img className="imglogo" src={"css.png"} alt="" />
        {/* <img className="imglogo" src={"react.png"} alt=""/> */}
        <img className="imglogo" src={"native.png"} alt="" />
      </div>
    </div>
  );
};
export default TruckApp;
