const router = require("express").Router();
require('../db/connect/connection')
const Wall = require('../db/models/wall.model');
const Project = require("../db/models/project.model");

router.post("/save", async(req,res) => {
  try{
    const { binding, measure, thickness ,maxDeviation, conclusion, author,activeProject } = req.body;
    const wall = await new Wall({ binding, measure, thickness ,maxDeviation, conclusion, authors:[author] });
    await wall.save();
    const projects = await Project.findOne({_id:activeProject})
    await Project.findOneAndUpdate(
      { _id: activeProject},
      {
        wall: [...projects.wall,wall._id]
      }
    );
    res.json("updated wall");
  }catch(err) {
    res.json(err);
  }
})

module.exports = router;
