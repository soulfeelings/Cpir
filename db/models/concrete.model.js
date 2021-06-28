const { Schema, model, pluralize } = require("mongoose");
pluralize(null);

const concreteSchema = Schema({
  binding: {
    type: String,
  },
  grade: {
    type: String,
  },
  classC: {
    type: String,
  },
  MPA: {
    type: String,
  },
  instrument: {
    type: String
  },
  authors: [{ type: Schema.Types.ObjectId, ref: 'user' }]
});

const Concrete = model("concrete", concreteSchema);
module.exports = Concrete;
