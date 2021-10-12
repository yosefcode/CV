import React from "react";
import "./apartments.css";
import "../slider.css";
import imgapartments from "./imgapartments.png";

const Shops = () => {
  return (
    <div
      className="divall apartments"
      onClick={() => {
        window.open("https://apartments-yc.herokuapp.com/");
      }}
    >
      <div className="title" dir="rtl">
        <h2>מאגר דירות נופש</h2>
        <h3> Front-End + Back-End</h3>
        אתר דירות נופש לציבור החרדי
        <br />
        <br />
        <li>קבלת המאגר משרת</li>
        <li>פילטור לפי פרמטרים</li>
        <li>שליחת הודעות</li>
        <li>מפות</li>
        <br />
        <h3>האתר עדיין בבנייה</h3>
      </div>

      <img className="imgproject" src={imgapartments} alt="" />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} alt="" />
        <img className="imglogo" src={"css.png"} alt="" />
        <img className="imglogo" src={"react.png"} alt="" />
        <img className="imglogo" src={"node.jpg"} alt="" />
        <img className="imglogo" src={"mongoo.png"} alt="" />
      </div>
    </div>
  );
};
export default Shops;
