const router = require('express').Router()
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../db/models/user.model')

router.get('/', authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    const token = await jwt.sign({ id: user._id }, process.env.KEY, { expiresIn: '5 days' })
    
    return res.json({ token, id: user._id, name: user.name, status: user.status, activeProject: user.activeProject })
  } catch (error) {
    res.json({ message: 'Server error' })
  }
})

module.exports = router;
