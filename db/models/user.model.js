const { Schema, model, pluralize } = require('mongoose');
pluralize(null);
const bcrypt = require('bcrypt')
const validator = require('validator');
require('../connect/connection')

const userSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  surName: {
    type: String,
    trim: true,
    lowercase: true,
    default: '',

  },
  thirdName: {
    type: String,
    trim: true,
    default: '',
    lowercase: true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error("некорректный email")
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
    max: 16
  },
  projects: [
    {
      title: { type: String },
      address: { type: String }
    }
  ],
  token: {
    type: String
  },
  activeProject: { type: String },
  status: { type: String, default: "client" }
})

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 7);
  next();
})

const User = model('user', userSchema);
module.exports = User;
