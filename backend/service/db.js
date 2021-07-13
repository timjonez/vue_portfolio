const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/portfolioDB", { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
  mongoose,
};
