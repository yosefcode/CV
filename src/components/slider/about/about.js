import "./about.css";

function About({ setShow }) {
  return (
    // <div className="about" dir="rtl">
    <div className="divabout" dir="rtl">
      <div className="title">קצת על עצמי...</div>
      <div className="content" id="about_me">
        <p className="title_li">פרופיל </p>
        <li>סיום לימודי פיתוח Full-Stack בנובמבר 2020. </li>
        <li>
          2021-2023 עבדתי על פרויקטים שונים כפרילנס, בחלק מהפרוייקטים עבדתי לבד
          ובחלקם כחלק מעבודת צוות. רכשתי ידע נרחב בפיתוח front-end ו- back-end.
        </li>
        <p className="title_li">כישורים ומיומנויות </p>
        <li> תכנון נכון, מסירות והשקעה.</li>
        <li> עבודה מהירה ויסודית, תוך התמקדות ביעילות.</li>
        <li> קליטה מהירה של מידע ותכונות חדשות.</li>
        <li> מוטיבציה גבוהה ורצון עז ללמוד.</li>
        <li> כישורי ארגון חזקים ומחויבות לסדר.</li>
        <li> כישורי תקשורת ויחסי אנוש טובים.</li>
        <li> יסודיות וסבלנות בביצוע משימות.</li>
        <p className="title_li">החוזקות שלי </p>
        <li> כתיבת קוד בצורה מסודרת.</li>
        <li> CSS – עבודה מדוייקת לפי העיצוב.</li>
      </div>

      <div className="content" id="project_me">
        <p className="title_li">פרוייקטים וניסיון תעסוקתי </p>
        <li className="li_project link_project" onClick={() => setShow(1)}>
          {" "}
          פרסום וחיפוש דירות נופש
        </li>

        <p className="Description_project">
          {" "}
          אתר פרסום למשכירים ולמחפשי דירות להשכרה או החלפת דירות.
        </p>
        <li className="li_project link_project" onClick={() => setShow(2)}>
          אפליקציית חברת שליחויות – אנדרואיד – NORCO{" "}
        </li>
        <p className="Description_project">
          אפליקציה לדיווחי העובדים על פעילותם השוטפת במהלך היום.
        </p>
        <li className="li_project link_project" onClick={() => setShow(3)}>
          {" "}
          ניהול אפליקציית חברת שליחויות –NORCO{" "}
        </li>
        <p className="Description_project">אתר ניהול פעילות השליחים. </p>
        <li className="li_project"> אפליקציית geektime – מובייל</li>
        <p className="Description_project">
          השתתפתי בצוות שבנה את אפליקציית geektime החדשה. בניתי חלק מהמסכים
          בפרוייקט.
        </p>
        <li className="li_project"> אפליקציית ניהול מוסדות - DORMI</li>
        <p className="Description_project">
          אפליקצית ניהול משימות למוסדות. פתיחת קריאה, משימות מתוזמנות, ניהול
          קריאות, מעקב טיפול, סגירת קריאה, ניהול קטגוריות.{" "}
        </p>
        <li className="li_project link_project" onClick={() => setShow(4)}>
          {" "}
          משחק - DOUBLE
        </li>
        <li className="li_project link_project">חנות</li>
        <p className="Description_project">פרוייקט הגמר של לימודי Full-Stack</p>
      </div>
    </div>
    // </div>
  );
}

export default About;
