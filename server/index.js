const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('../config.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

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

// QUESTIONS AND ANSWERS REQUESTS

app.get('/qa/questions', (req, res) => {
  retrieveProductQuestions(req.query.product_id, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(response.data);
    }
  })
});

const retrieveProductQuestions = (productId, callback) => {
  // console.log(productId);
  axios.get(`${server}/qa/questions?product_id=${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((questions) => {
    callback(null, questions);
  }).catch((err) => {
    console.log(err, null);
  })
};

// CART REQUESTS

// INTERACTIONS REQUESTS

// SERVER AND PORT
const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
