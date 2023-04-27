const express = require('express');
const path = require("path");
require('dotenv').config();
// import routes
const todoRoutes = require('./routes/todo');

// Running express server
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', todoRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening at http://localhost:${port}`);
});
