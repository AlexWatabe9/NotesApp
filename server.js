const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/api-Routes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apiRoutes);
app.use(htmlRoutes);

app.use(express.static('public'));
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
