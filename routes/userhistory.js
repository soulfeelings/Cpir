const router = require("express").Router();
require('../db/connect/connection')
const Project = require('../db/models/project.model')

router.post("/", async (req, res) => {
  try {
    const { id } = req.body;
    const userProjects = await Project.find({ author: id }).populate({
      path: 'concrete',
    }).populate({ path: 'beam' }).populate({ path: 'wall' }).populate({ path: 'executor' }).exec()/*.populate('wall', 'concrete', 'beam').exec()*/;
    res.json(userProjects)
  } catch (err) {
    res.json(err);
  }
})

module.exports = router;
