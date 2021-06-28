const router = require("express").Router();
const User = require("../db/models/user.model");
const bcrypt = require('bcrypt')

router.post("/", async (req, res) => {
  const { name, password } = req.body.logInfo;
  try {
    let user = await User.findOne({ name });
    let email = await User.findOne({ email: name });
    user = user || email;
    const isTruePassword = await bcrypt.compare(password, user.password);
    if (user && isTruePassword) {
      res.json({ token: user.token, id: user._id, name: user.name, status: user.status, activeProject: user.activeProject });
    } else {
      throw new Error("Неверный пароль, имя пользователя или email");
    }
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;
