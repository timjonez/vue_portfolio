const { mongoose } = require('../service/db');

const adminSchema = {
    email: String,
    password: String,
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
    Admin,
};