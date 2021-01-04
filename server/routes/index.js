const router = require('express').Router();
const nodemailer = require('nodemailer');

// /api/todo
router.post('/send', (req, res) => {
  console.log(req.body);
  const output = `
    <p>you have a new contact request</p>
    <h3>contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>message</h3>
    <p>${req.body.message}</p>
  `;

  async function main() {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GM_USER,
        pass: process.env.GM_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    let info = await transporter.sendMail({
      from: `"${req.body.name}" <${req.body.email}>`,
      to: process.env.GM_USER,
      subject: `message from ${req.body.name}`,
      text: `${req.body.email}`,
      html: output
    }, (err, info) => {
      res.json()
    })
  }
  main().catch(console.error);
})

module.exports = router;