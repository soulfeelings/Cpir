const router = require('express').Router()

const nodemailer = require("nodemailer");
const Project = require("../db/models/project.model")

router.post('/', async (req, res) => {

  const { email, data, id } = req.body
  console.log(id);
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "AntonJan22895@gmail.com",
      pass: "qwe-1234"
    }
  });

  await transporter.sendMail({
    to: email,
    subject: "Результаты Экспертизы CPIR",
    text: data,
    // text: "Hello world?",
    // html: "<b>awdawd?</b>",
  }, () => {
    if (err) console.log(err)
    else res.json({ message: true })
  });

  await Project.findOneAndUpdate({ _id: id }, { managed: true })

})


module.exports = router
