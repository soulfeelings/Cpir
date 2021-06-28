const router = require("express").Router();
const User = require("../db/models/user.model");
const jwt = require('jsonwebtoken')

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body.newUser;
    const user = new User({ name, email, password });

    await user.save();

    const id = user._id;

    const token = await jwt.sign({ id }, process.env.KEY, {
      expiresIn: "5 days",
    });

    const update = await User.updateOne({ _id: id }, { token });
    if (update.ok === 1) {
      res.json({ token, id: user._id, name: user.name, status: user.status, activeProject: user.activeProject });
    } else {
      throw new Error("нет доступа");
    }
  } catch (err) {

    res.json({ message: err.message });

  }
});

module.exports = router;
