const { mongoose } = require('../service/db');

const projectSchema = {
    slug: { type: String, unique: true, required: true},
    title: String,
    subTitle: String,
    liveLink: String,
    sourceLink: String,
    pictures: Array,
    desc: String,
    techList: Array,
};

const Project = mongoose.model('Project', projectSchema);

module.exports = {
    Project,
};
