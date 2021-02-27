const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

// PRODUCTS REQUESTS

// REVIEWS REQUESTS
//https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/

app.get('/test', function (req, res) {
  res.send('GET request to the homepage')
})

// QUESTIONS AND ANSWERS REQUESTS

// CART REQUESTS

// INTERACTIONS REQUESTS

// SERVER AND PORT
const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
