const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const projectSchema = Schema({

  address: { type: String },
  email: { type: String },
  phone: { type: String },
  name: { type: String },
  surName: { type: String },
  thirdName: { type: String },
  nameOrganization: { type: String },
  startDate: {type: String},
  executor: { type: Schema.Types.ObjectId, ref: 'user' },
  objectType: {type: String},
  wallType: {type: String},
  wallDamage: {type: String},
  roofDamage: {type: String},
  wallWater: {type: String},
  beamWater: {type: String},
  otherDefects: {type: String},
  recommendMonitoring: {type: String},
  recommendGeological: {type: String},
  beam: [
    { type: Schema.Types.ObjectId, ref: 'beam' }
  ],
  concrete: [
    { type: Schema.Types.ObjectId, ref: 'concrete' }
  ],
  wall: [
    { type: Schema.Types.ObjectId, ref: 'wall' }
  ],
  managed: {type: Boolean, default:false},
  author: { type: Schema.Types.ObjectId, ref: 'user' },
  status: { type: String },
  result: { type: String }

});

const Project = model("project", projectSchema);
module.exports = Project;
