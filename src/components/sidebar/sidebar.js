import { useState } from "react";
import "./sidebar.css";
import what from "./img/WhatsApp.png";
import git from "./img/git.png";
import phone from "./img/phone.png";
import mail from "./img/mail.png";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import MessageIcon from "@material-ui/icons/Message";

function SideBar() {
  const whatsapp = (
    <img
      className="what"
      src={what}
      alt="תמונה חסרה"
      onClick={() => {
        window.open("https://wa.me/972584112424/");
      }}
    />
  );

  const github = (
    <GitHubIcon
      className="git"
      style={{
        fontSize: "3.5vw @media only screen and (max-width: 999px) ",
      }}
      onClick={() => {
        window.open("https://github.com/yosefcode");
      }}
    />
  );

  const download = (
    <a href="CV.pdf" download="קורות חיים - יוסף כהן" title="קורות חיים pdf">
      <GetAppIcon
        className="download"
        style={{ fontSize: "3vw @media only screen and (max-width: 999px)" }}
      />
    </a>
  );

  const message = (
    <MessageIcon
      className="messagelink"
      style={{ fontSize: "3vw @media only screen and (max-width: 999px)" }}
    />
  );

  const email = (
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=yosef9987@gmail.com"
      target="_blank"
    >
      <img className="mail" src={mail} alt="תמונה חסרה" />
    </a>
  );

  const call = (
    <img
      className="phone"
      src={phone}
      alt="תמונה חסרה"
      onClick={() => {
        window.open("tel:0584112424");
      }}
    />
  );

  return (
    <div className="sidebar">
      <div className="over">
        <div className="titleright">
          <h2> יוסף כהן</h2>
          <h4>Full-Stack Developer</h4>
        </div>

        <div className="titleleft">
          <div className="divphone">
            058-4112424 &nbsp; {whatsapp} &nbsp; &nbsp; {call}
          </div>
          <div className="divmail">
            <h5> yosef9987@gmail.com </h5>&nbsp; &nbsp; {email}{" "}
          </div>
          <div className="divlinks">
            {message}
            {download}
            {github}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
