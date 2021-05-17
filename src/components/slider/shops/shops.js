import React from "react";
import "./shops.css";
import "../slider.css";
import imgshops from "./imgshops.png";
export default () => {
  return (
    <div
      className="divall shops"
      onClick={() => {
        window.open("https://shop-full.herokuapp.com/");
      }}
    >
      <div className="title" dir="rtl">
        <h2>חנות</h2>
        <h3> Front-End + Back-End</h3>
        פרוייקט הקמת חנות - <br />
        במסגרת לימודי קורס Full-Stack
        <br />
        <br />
        <li>קבלת מוצרים משרת</li>
        <li>חיפוש</li>
        <li>שליחת הודעות</li>
        <li>עגלת קניות</li>
        <li>
          ניהול - CRUD
          <h5>
            הוספה, עריכה, ומחיקת מוצרים. <br />
            עדכון מיידי ע"י SOCKET IO.
          </h5>
        </li>
        <br />
        <li>סיסמת כניסת מנהל - 123</li>
      </div>

      <img className="imgproject" src={imgshops} />

      <div className="divlogo">
        <img className="imglogo" src={"js.png"} />
        <img className="imglogo" src={"css.png"} />
        <img className="imglogo" src={"react.png"} />
        <img className="imglogo" src={"node.jpg"} />
        <img className="imglogo" src={"mongoo.png"} />
      </div>
    </div>
  );
};
