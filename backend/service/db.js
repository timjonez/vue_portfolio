const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
  mongoose,
};
