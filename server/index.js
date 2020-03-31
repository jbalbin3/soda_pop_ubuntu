const express = require('express');

const application = express();
const port = process.env.PORT || 4000;

application.use(express.static('dist'));

// eslint-disable-next-line no-console
application.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  app: application,
};
