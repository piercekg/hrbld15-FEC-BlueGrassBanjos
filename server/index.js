const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// PRODUCTS REQUESTS

// REVIEWS REQUESTS

// QUESTIONS AND ANSWERS REQUESTS

// CART REQUESTS

// INTERACTIONS REQUESTS

// SERVER AND PORT
const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
