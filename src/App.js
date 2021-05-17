import React, { useState } from "react";

import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Tabs from "./components/tabs/tabs";
import Modal from "../src/components/slider/modal-‏‏truck-app/modal-‏‏truck-app";
import Message from "../src/components/message/message";

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App" dir="rtl">
      <Sidebar />
      <Tabs setModal={setModal} />
      {modal && <Modal setModal={setModal} />}
      <Message />
    </div>
  );
}

export default App;
