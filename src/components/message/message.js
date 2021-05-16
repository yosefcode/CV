import "./message.css";
import axios from "axios";
import { useState } from "react";

function Message() {
  let message = {};
  const [modal, setModal] = useState("modal display-none");

  const msgmodal = message === "" ? "לא כתבת כלום" : "ההודעה נשלחה בהצלחה";

  const sendMessage = () => {
    axios.post("/api/message/", message).then((res) => console.log("res.data"));

    setModal("modal display-block");

    document.getElementById("textarea").innerHTML = "";

    setTimeout(function () {
      setModal("modal display-none");
    }, 4000);
  };

  return (
    <div className="message">
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

      <div className={modal}>ההודעה נשלחה בהצלחה</div>

      <div style={{ height: "70px" }}></div>
    </div>
  );
}

export default Message;
