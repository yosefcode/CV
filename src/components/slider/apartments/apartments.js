import React from "react";
import "./apartments.css";
import "../slider.css";
import imgapartments from "./imgapartments.png";

const Shops = () => {
  return (
    <div
      className="divall apartments"
      onClick={() => {
        window.open("https://www.vainafash.co.il/");
      }}
    >
      <div className="title" dir="rtl">
        <h2>מאגר דירות נופש</h2>
        <h3> Front-End + Back-End</h3>
        אתר דירות נופש לציבור החרדי
        <br />
        <li>קבלת המאגר משרת</li>
        <li>פילטור לפי פרמטרים</li>
        <li>שליחת הודעות</li>
        <li>מפות</li>
        <li>Login - Firebase</li>
        <li>איזור אישי</li>
        <li>פרסום מודעות</li>
        <li>ניהול - CRUD</li>
      </div>

      <img className="imgproject" src={imgapartments} alt="" />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} alt="" />
        <img className="imglogo" src={"css.png"} alt="" />
        <img className="imglogo" src={"react.png"} alt="" />
        <img className="imglogo" src={"node.jpg"} alt="" />
        <img className="imglogo" src={"mongoo.png"} alt="" />
        <img className="imglogo" src={"Firebase.png"} alt="" />
      </div>
    </div>
  );
};
export default Shops;
