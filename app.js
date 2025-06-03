const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3000;

//app.use(cors);
app.use(express.json());
app.use(routes); // All routes will be prefixed with /api

app.listen(PORT, () => {
    console.log('Server running on port 3000');
});