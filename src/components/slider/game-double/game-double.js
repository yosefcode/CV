import React from "react";
import "./game-double.css";
import "../slider.css";
import gamedouble from "./game-double.png";

const Gamedouble = () => {
  return (
    <div className="divall gamedouble">
      <div className="title" dir="rtl">
        <h2>Game - Double</h2>
        <h3> Front-End</h3>
        <h3>web + app - android</h3>
        משחק מאתגר ומהנה למציאת שני קלפים זהים בזמן מהיר.
        <br />
        <br />
        <li>שני דרגות קושי</li>
        <li>ניקוד</li>
        <li>טיימר</li>
        <li>צלילים</li>
        <br />
        <img
          className="imglogo"
          src={"google_play.jpg"}
          alt=""
          style={{
            cursor: "pointer",
            // width: "80%",
            height: "4vw",
            borderRadius: 15,
          }}
          onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=com.double_game"
            );
          }}
        />
      </div>

      <img
        className="imgproject"
        style={{ cursor: "pointer" }}
        src={gamedouble}
        alt=""
        onClick={() => {
          window.open("https://double-game.netlify.app/");
        }}
      />

      <div className="divlogo">
        <img className="imglogo" src={"native.png"} alt="" />
        <img className="imglogo" src={"js.png"} alt="" />
        <img className="imglogo" src={"css.png"} alt="" />
        <img className="imglogo" src={"react.png"} alt="" />
      </div>
    </div>
  );
};
export default Gamedouble;
