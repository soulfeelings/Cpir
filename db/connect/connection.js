const {connect, connection} = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

connect(process.env.DB_CONNECT, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})


module.exports = connection;
