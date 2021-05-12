import React from "react";
import "./modal-‏‏truck-app.css";
import "../project.css";

import screen1 from "./1.jpg";
import screen2 from "./2.jpg";
import screen3 from "./3.jpg";
import screen4 from "./4.jpg";
import screen5 from "./5.jpg";
import screen6 from "./6.jpg";

export default ({ setModal }) => {
  return (
    <div
      className="modaltruckapp"
      onClick={() => {
        setModal(false);
      }}
    >
      <div
        className="modalimg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img className="img1 imgapp" src={screen1} />
        <img className="img1 imgapp" src={screen2} />
        <img className="img1 imgapp" src={screen3} />
        <img className="img1 imgapp" src={screen4} />
        <img className="img1 imgapp" src={screen5} />
        <img className="img2 imgapp" src={screen6} />
      </div>
    </div>
  );
};
