const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
require('./db/connect/connection')

const signup = require('./routes/signup');
const login = require('./routes/login');
const beam = require('./routes/beam');
const concrete = require('./routes/concrete');
const wall = require('./routes/wall');
const userHistory = require('./routes/userhistory')
const auth = require('./routes/auth')
const project = require('./routes/project')
const user = require('./routes/user')
const engineer = require('./routes/engineer')
const manager = require('./routes/manager')
const mail = require('./routes/mail')

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

app.use = (express.static(path.join(__dirname,"frontend","build")))
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/signup', signup);
app.use('/login', login);
app.use('/beam', beam);
app.use('/concrete', concrete);
app.use('/wall', wall);
app.use('/userhistory', userHistory)
app.use('/auth', auth)
app.use('/projects', project)
app.use('/user', user)
app.use('/engineer', engineer)
app.use('/manager', manager)
app.use('/mail', mail)

app.listen(port, () => {
  console.log(`Server run on port:${port}`)
})

