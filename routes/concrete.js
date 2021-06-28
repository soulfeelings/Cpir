const router = require("express").Router();
require("../db/connect/connection");
const Concrete = require("../db/models/concrete.model");
const Project = require("../db/models/project.model");
router.post("/save", async (req, res) => {
  try {
    const { binding, MPA, grade, classC, instrument, author, activeProject } =
      req.body;
    const concrete = await new Concrete({
      binding,
      MPA,
      grade,
      classC,
      instrument,
      authors: [author],
    });
    await concrete.save();
    const projects = await Project.findOne({_id:activeProject})
    const b = await Project.findOneAndUpdate(
      { _id: activeProject },
      {
        concrete: [...projects.concrete,concrete._id]
      }
    );
    res.json("updated concrete");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
