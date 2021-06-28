const router = require("express").Router();
require("../db/connect/connection");
const Beam = require("../db/models/beam.model");
const Project = require("../db/models/project.model");


router.post("/save", async (req, res) => {
  try {
    const {
      binding,
      firstPoint,
      secondPoint,
      middlePoint,
      length,
      result,
      deflection,
      author,
      activeProject,
    } = req.body;
    const beam = await new Beam({
      binding,
      firstPoint,
      secondPoint,
      middlePoint,
      length,
      result,
      deflection,
      authors: [author],
    });
    await beam.save();
    const projects = await Project.findOne({_id:activeProject})

    await Project.findOneAndUpdate(
      { _id: activeProject},
      {
        beam: [...projects.beam,beam._id]
      }
    );
    
    res.json("updated beam");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
