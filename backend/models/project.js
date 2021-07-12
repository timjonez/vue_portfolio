const { mongoose } = require('../service/db');

const projectSchema = {
    slug: String,
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
