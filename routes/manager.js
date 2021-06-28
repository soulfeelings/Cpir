const router = require("express").Router();
const User = require("../db/models/user.model");
const Projects = require('../db/models/project.model');




router.put("/", async (req, res) => {
  try {
    const {id,name} = req.body;
    
    const user = await User.findOne({name})
  
    await Projects.findOneAndUpdate({_id:id},{executor: user._id, status: "work" })
    res.status(201).json({message: true})
  }catch(err) {
    res.status(500).json({message:"server error"})
  }
});


module.exports = router;
