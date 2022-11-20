import "./about.css";

function About() {
  return (
    <div className="about" dir="rtl">
      <div className="divabout course">
        <div className="title">לימודים </div>
        לימודי Full-Stack <br />
        <li>HTML</li>
        <li>CSS</li>
        <li>js</li>
        <li>React</li>
        <li>React native</li>
        <li>Node.js</li>
        <li>Mongoo</li>
        <li>Firebase</li>
        <li>
          השתתפות ב-Bootcamp – בניית אפליקציה אשר עוקבת אחר רכבי הסעות תלמידים
          ומעדכנת מיקום בזמן אמת וזמן הגעה.
        </li>
      </div>
      <div className="divabout Talents">
        <div className="title">כישורים </div>
        <li>רצון להתפתח ולהתמקצע.</li>
        <li>יסודיות.</li>
        <li>סבלנות.</li>
        <li>יכולת למידה עצמית.</li>
      </div>
    </div>
  );
}

export default About;
