import React from "react";
import "./truck-web.css";
import "../slider.css";

import imgtruckweb from "./imgtruckweb.png";
export default () => {
  return (
    <div
      className="divall truckweb"
      onClick={() => {
        window.open("https://trucks-web-admin.netlify.app/");
      }}
    >
      <div className="title" dir="rtl">
        <h2> אתר - איסוף נתונים</h2>
        <h3> Front-End</h3>
        אתר אשר מרכז נתונים המתקבלים מהעובדים מאפליקציית אנדרואיד ומעדכן נתונים
        באפליקציה.
        <br />
        <br />
        <li>LOGIN</li>
        <li>הוספת משתמשים</li>
        <li>עדכון נתונים</li>
        <li>מיון לפי שמות ותאריכים</li>
        <li>מפות </li>
        <br />
        <br />
        <br />
      </div>
      <div className="divuser title">
        <li>USER - a@a.com </li>
        <li>PASSWORD - 1</li>
      </div>

      <img className="imgproject" src={imgtruckweb} />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} />
        <img className="imglogo" src={"css.png"} />
        <img className="imglogo" src={"react.png"} />
      </div>
    </div>
  );
};
