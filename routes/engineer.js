const router = require("express").Router();
const User = require("../db/models/user.model");
const Project = require('../db/models/project.model')
const jwt = require('jsonwebtoken')

router.post("/", async (req, res) => {
  try {
    const { name, email, surName, thirdName, password } = req.body.info;

    const user = new User({
      name,
      surName,
      thirdName,
      email,
      password,
      status: "engineer",
    });

    await user.save();

    const token = await jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5 days",
    });

    const update = await User.updateOne({ _id: user._id }, { token });

    res.json({ massage: true });
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.put("/", async (req, res) => {
  try {
    const {
      address,
      email,
      phone,
      name,
      surName,
      thirdName,
      startDate,
      objectType,
      wallType,
      wallDamage,
      roofDamage,
      wallWater,
      beamWater,
      otherDefects,
      recommendMonitoring,
      recommendGeological,
      projectId2,
    } = req.body;

    console.log(address,
      email,
      phone,
      name,
      surName,
      thirdName,
      startDate,
      objectType,
      wallType,
      wallDamage,
      roofDamage,
      wallWater,
      beamWater,
      otherDefects,
      recommendMonitoring,
      recommendGeological,
      projectId2);

    const prod = await Project.findOneAndUpdate({ _id: projectId2 }, {
      address,
      email,
      phone,
      name,
      surName,
      thirdName,
      startDate,
      objectType,
      wallType,
      wallDamage,
      roofDamage,
      wallWater,
      beamWater,
      otherDefects,
      recommendMonitoring,
      recommendGeological
    })

    console.log(prod);

    res.json('updated')
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
