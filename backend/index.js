const express = require('express');
const bodyParser = require('body-parser');
const Project = require('./models/project');
const Client = require('./models/client');
const { authenticateToken } = require('./controllers/auth');
const api = require('./controllers/api')

const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});

app.route('/projects')
  .get(api.projects)
  .post(authenticateToken, api.addProject);

app.route('/projects/:slug')
  .get(api.getProject)
  .patch(api.updateProject)
  .delete(authenticateToken, api.deleteProject);

app.post('/contact', api.contactUs);
app.post('/login', api.login);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    };
});
