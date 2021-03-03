const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('../config');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld'

// PRODUCTS REQUESTS

// RELATED PRODUCTS REQUESTS
app.get('/products/:product_id/related', (req, res) => {
  retrieveRelatedProducts(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  })
});

const retrieveRelatedProducts = (productId, callback) => {
  axios.get(`${server}/products/${productId}/related`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

// REVIEWS REQUESTS
app.get('/products/:product_id/reviews', (req, res) => {
  retrieveReviews(req.params.product_id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  })
});

const retrieveReviews = (productId, callback) => {
axios.get(' https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews/?product_id=18201', {headers: {'Authorization': `${config.TOKEN}`}})
.then ((res) => {
  callback(null, res.data);
})
.catch ((res) => {
  callback(res, null)
})
};

// QUESTIONS AND ANSWERS REQUESTS

// CART REQUESTS

// INTERACTIONS REQUESTS

// SERVER AND PORT
const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
