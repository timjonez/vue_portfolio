const { mongoose } = require('../service/db');

const clientSchema = {
    token: String,
};

const Client = mongoose.model('Client', clientSchema);

module.exports = {
    Client,
};