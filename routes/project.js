const router = require('express').Router();
const { find } = require('../db/models/project.model');
const Project = require('../db/models/project.model')
const User = require('../db/models/user.model')

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find({}).populate({
      path: 'concrete',
    }).populate({ path: 'beam' }).populate({ path: 'wall' }).populate({ path: 'executor' }).exec()

    res.json(projects);
  } catch (err) {
    console.log(err);
  }
})

router.post('/', async (req, res) => {
  try {

    const { projectInfo } = req.body;

    const newProject = new Project(projectInfo)

    await newProject.save();

    res.status(200).json({ id: newProject.id })

  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

router.put('/', async (req, res) => {

  try {

    const { projectId, userId, status } = req.body;
    await Project.findOneAndUpdate({ _id: projectId }, { status: status })

    await User.findOneAndUpdate({ _id: userId }, { activeProject: null })

    res.status(200).json({ message: true })

  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})


module.exports = router
