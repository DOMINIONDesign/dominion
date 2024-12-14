const express = require("express");
const router = express.Router();
const { transporter } = require("../utilities/mail");
router.post("/mail", async (req, res) => {
  const { email, name, mobile, message } = req.body;
  console.log(req.body);
  const mailOptions = {
    from: "shaikriyaz222@gmail.com",
    to: "shaikriyaz222@gmail.com",
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
module.exports = router;
