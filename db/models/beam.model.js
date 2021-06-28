const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const beamSchema = Schema({
  binding: {
    type: String
  },
  deflection: {
    type: Number
  },
  result: {
    type: String
  },
  firstPoint: {
    type: String
  },
  secondPoint: {
    type: String
  },
  middlePoint: {
    type: String
  },
  length: {
    type: String
  },
  authors: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

const Beam = model("beam", beamSchema);
module.exports = Beam;
