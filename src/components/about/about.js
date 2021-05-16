import { useState } from "react";
import "./about.css";

function SideBar() {
  return (
    <div className="about">
      <div className="divabout course">
        <div className="title">לימודים </div>
        לימודי Full-Stack <br />
        <li>Full-Stack</li>
        <li>js</li>
        <li>React</li>
        <li>React native</li>
        <li>Node.js</li>
        <li>Mongoo</li>
        פיתוח בכלים: js, React, React native, Node.js, Mongoo
      </div>
      <div className="divabout Talents">
        <div className="title">כישורים </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        כישורים: רצון להתפתח ולהתמקצע. יסודיות. סבלנות. יכולת למידה עצמית.
      </div>
      <div className="divabout works">
        <div className="title">נסיון </div>
        <li>
          בניית אפליקציה לאנדרואיד – דיווחי נהגים לחברה על פעילותם השוטפת במהלך
          יום העבודה.
          <a
            href="https://drive.google.com/file/d/1KxdFBtFAFA2_cJurjiT5Hz9PwVdGh336/view?usp=sharing"
            target="_blank"
          >
            הורדה
          </a>
          כניסה - User - 111. Password - 1.
        </li>
        <br />
        <li>
          בניית אתר web - מקבל את הנתונים אשר נשלחים מהנהגים באפליקציה ומרכז
          אותם בטבלאות. כמו כן מעדכן נתונים באפליקציה של הנהגים.
          <a href="https://trucks-web-admin.netlify.app" target="_blank">
            הורדה
          </a>
          כניסה - Email - a@a.com. Password - 1
        </li>
        <br />
        <li>
          בניית משחק - DOUBLE - בניית משחק אשר צריך למצוא תמונה משותפת בין קבוצת
          התמונות
          <a href="https://double-game.netlify.app/" target="_blank">
            הורדה
          </a>
        </li>
        <br />
        <li>
          חנות – במסגרת לימודי Full-Stack
          <a href="https://shop-full.herokuapp.com/" target="_blank">
            הורדה
          </a>
          כניסת מנהל - 123
        </li>
        <br />
        <li>
          השתתפות ב-Bootcamp – בניית אפליקציה אשר עוקבת אחר רכבי הסעות תלמידים
          ומעדכנת מיקום בזמן אמת וזמן הגעה.
        </li>
      </div>
    </div>
  );
}

export default SideBar;
