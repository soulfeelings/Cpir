const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const wallSchema = Schema({
  binding: {
    type: String,
  },
  measure: {
    type: String,
  },
  thickness: {
    type: String
  },
  maxDeviation: {
    type: String
  },
  conclusion: {
    type: String
  },
  authors: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

const Wall = model("wall", wallSchema);
module.exports = Wall;
