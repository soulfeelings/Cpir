const router = require("express").Router();
const User = require("../db/models/user.model");

router.get("/", async (req, res) => {
  try {
    const userFind = await User.find()
    res.status(201).json({userFind})
  }catch(err) {
    res.status(500).json({message:"server error"})
  }
});

router.put("/", async (req, res) => {
  try {
    const {userId,projectId} = req.body.info;
    
  
    await User.findOneAndUpdate({_id:userId}, {activeProject: projectId})
    res.status(201).json({message: true})
  }catch(err) {
    res.status(500).json({message:"server error"})
  }
});

router.delete("/", async (req, res) => {
  const {name} = req.body;
  try {
    await User.findOneAndDelete({name})
    res.status(201).json({message:true})
  }catch(err) {
    res.status(500).json({message:"server error"})
  }
});

module.exports = router;
