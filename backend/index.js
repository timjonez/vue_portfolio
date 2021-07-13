const express = require('express');
const bodyParser = require('body-parser');
const Project = require('./models/project');
const Client = require('./models/client');
const { authenticateToken } = require('./controllers/auth');
const api = require('./controllers/api')

const app = express();
app.use(bodyParser.json());

app.route('/projects')
  .get(api.projects)
  .post(authenticateToken, api.addProject);

app.post('/login', api.login);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    };
});
