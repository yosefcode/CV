const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const dotenv = require("dotenv");

dotenv.config();
app.use(express.static(path.join(__dirname, "build")));

const PORT = process.env.PORT || 4200;

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    port: 25,
    auth: {
      user: process.env.GOOGLE_MAIL,
      pass: process.env.GOOGLE_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);

app.post("/api/message/", function (req, res) {
  var mailOptions = {
    to: process.env.GOOGLE_MAIL,
    subject: "הודעה מדף קורות חיים",
    text: `הודעה: ${req.body.message} `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
