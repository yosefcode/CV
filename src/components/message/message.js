import "./message.css";
import axios from "axios";
import { useState } from "react";

function Message({ modalmessage, setModalmessage }) {
  let message = {};
  const [modal, setModal] = useState("modal display-none");
  const [msgmodal, setMsgmodal] = useState();

  const sendMessage = () => {
    !message.message ? nomsg() : yesmsg();
  };

  const nomsg = () => {
    setMsgmodal("מה אני אשלח? לא כתבת כלום  \ud83d\ude14");
    setModal("modal display-block");
    setTimeout(function () {
      setModal("modal display-none");
    }, 2000);
  };

  const yesmsg = () => {
    axios.post("/api/message/", message).then((res) => console.log("res.data"));
    setMsgmodal("ההודעה נשלחה בהצלחה  \ud83d\ude00");
    setModal("modal display-block");
    document.getElementById("textarea").innerHTML = "";
    document.getElementById("textareamodal").innerHTML = "";
    setTimeout(function () {
      setModal("modal display-none");
      setModalmessage("displaynone");
    }, 2000);
  };

  return (
    <div>
      <div className={"message"}>
        <div
          onInput={(e) => (message.message = e.currentTarget.textContent)}
          id="textarea"
          className="textarea"
          contentEditable
          placeholder=" אשמח לשמוע מכם ... &#x1F60A;"
        ></div>

        <div
          className="btnmessage"
          onClick={() => {
            sendMessage();
          }}
        >
          שלח
        </div>

        <div className={modal}>{msgmodal}</div>

        <div style={{ height: "70px" }}></div>
      </div>

      <div
        className={modalmessage}
        onClick={() => {
          setModalmessage("displaynone");
        }}
      >
        <div
          className="modalmsg"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            onInput={(e) => (message.message = e.currentTarget.textContent)}
            id="textareamodal"
            className="textarea"
            contentEditable
            placeholder=" אשמח לשמוע מכם ... &#x1F60A;"
          ></div>

          <div
            className="btnmessage"
            onClick={() => {
              sendMessage();
            }}
          >
            שלח
          </div>

          <div className={modal}>{msgmodal}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
