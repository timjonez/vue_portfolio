const slugify = require('slugify');
const { Project } = require('../models/project');

exports.projects = (req, res) => {
  Project.find((err, projects) => {
    if (!err) {
      res.send(projects)
    } else {
      res.sendStatus(500)
    }
  });
};

exports.addProject = (req, res) => {
  const project = new Project({
    slug: slugify(req.body.title),
    title: req.body.title,
    subTitle: req.body.subTitle,
    liveLink: req.body.liveLink,
    sourceLink: req.body.sourceLink,
    pictures: req.body.picUrls,
    desc: req.body.desc,
    techList: req.body.techList,
  });

  project.save((err) => {
    if (!err) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  });
};