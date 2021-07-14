const slugify = require('slugify');
const { Project } = require('../models/project');
const { Admin } = require('../models/admin');
const { checkPasswordAndLogin } = require('./auth.js');
const { sendEmail } = require('./email.js');


exports.projects = (req, res) => {
  Project.find((err, projects) => {
    if (!err) {
      res.send(projects)
    } else {
      res.sendStatus(500)
    }
  });
};

exports.getProject = (req, res) => {
  Project.find({slug: req.params.slug}, (err, project) => {
    if (!err) {
      res.json(project)
    } else {
      res.sendStatus(404)
    }
  })
};

exports.addProject = (req, res) => {
  const project = new Project({
    slug: slugify(req.body.title.toLowerCase()),
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

exports.updateProject = (req, res) => {
  Project.updateOne({ slug: req.params.slug }, { $set: req.body }, (err) => {
    if (!err) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  })
};

exports.deleteProject = (req, res) => {
  Project.deleteOne({slug: req.params.slug}, (err) => {
    if (!err) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  })
}

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  Admin.findOne({ email: email}, (err, admin) => {
    if (!err) {
      const token = checkPasswordAndLogin(email, password, admin.password, (token) => {
        if (token !== null) {
          res.json({token: token})
        } else {
          res.send('failed to log in')
        }
      });
    } else {
      res.send('Your email and/or password are not correct')
    }
  })
};

exports.contactUs = (req, res) => {
  const message = '\nName: ' +req.body.name +'\nEmail: ' + req.body.email + '\n'+ req.body.message
  sendEmail(req.body.subject, message, (err) => {
    if (!err) {
      res.sendStatus(200)
    } else {
      res.sendStatus(500)
    }
  });
};
