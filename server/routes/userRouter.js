const express = require("express");
const router = express.Router();
const multer = require("multer");
const fsPromises = require("fs/promises");
const path = require("path");
const fs = require("fs");
const { transporter } = require("../utilities/mail");
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdir(uploadDir, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating upload directory:", err);
    }
  });
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${file.originalname}`;
    cb(null, uniqueFilename);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
router.post("/mail", async (req, res) => {
  const { email, name, mobile = "NA", message } = req.body;
  const mailOptions = {
    from: "dominiondec@gmail.com",
    to: "design@dominionengg.com",
    subject: `User ${name} wants to get in touch with you!!`,
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              background-color: #f4f4f4;
              padding: 20px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              background-color: #ffffff;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }
            th, td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #4CAF50;
              color: white;
            }
            tr:nth-child(even) {
              background-color: #f2f2f2;
            }
            tr:hover {
              background-color: #ddd;
            }
          </style>
        </head>
        <body>
          <h2>User Information</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Message</th>
            </tr>
            <tr>
              <td>${name}</td>
              <td>${email}</td>
              <td>${mobile}</td>
              <td>${message}</td>
            </tr>
          </table>
        </body>
      </html>
    `, // HTML content body
  };

  await transporter.sendMail(mailOptions);
  res.send("Email sent successfully!!");
});
router.post(
  "/careers",
  upload.fields([{ name: "resume", maxCount: 1 }]),
  async (req, res) => {
    const { email, name, position, experience } = req.body;
    let mailOptions = {
      from: "dominiondec@gmail.com",
      to: "design@dominionengg.com",
      subject: `Careers: User ${name} wants to join your team!`,
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
                background-color: #f4f4f4;
                padding: 20px;
              }
              table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
              }
              th, td {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #ddd;
              }
              th {
                background-color: #4CAF50;
                color: white;
              }
              tr:nth-child(even) {
                background-color: #f2f2f2;
              }
              tr:hover {
                background-color: #ddd;
              }
            </style>
          </head>
          <body>
            <h2>User Information</h2>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Years of Experience</th>
              </tr>
              <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${position}</td>
                <td>${experience}</td>
              </tr>
            </table>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: path.basename(req.files.resume[0].path),
          path: req.files.resume[0].path,
        },
      ],
    };
    // console.log(req.files.resume[0].path)
    await transporter.sendMail(mailOptions);
    await fsPromises.unlink(req.files.resume[0].path);
    res.send("Email sent successfully!!");
  }
);
module.exports = router;
