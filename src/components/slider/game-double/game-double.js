import React from "react";
import "./game-double.css";
import "../slider.css";
import gamedouble from "./game-double.png";

const Gamedouble = () => {
  return (
    <div
      className="divall gamedouble"
      onClick={() => {
        window.open("https://double-game.netlify.app/");
      }}
    >
      <div className="title" dir="rtl">
        <h2>Game - Double</h2>
        <h3> Front-End</h3>
        משחק מאתגר ומהנה למציאת שני קלפים זהים.
        <br />
        <br />
        <li>מספר דרגות קושי</li>
        <li>ניקוד</li>
        <li>טיימר</li>
        <li>צלילים</li>
      </div>

      <img className="imgproject" src={gamedouble} alt="" />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} alt="" />
        <img className="imglogo" src={"css.png"} alt="" />
        <img className="imglogo" src={"react.png"} alt="" />
      </div>
    </div>
  );
};
export default Gamedouble;
