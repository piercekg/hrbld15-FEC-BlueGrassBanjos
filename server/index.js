const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('../config_example.js')

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
  axios.get(`${server}/products/${productId}/related`, {headers: {Authorization: `${config.TOKEN}`}})
    .then((ids) => {
      return Promise.all(ids.data.map(retrieveOneProduct))
      .then((data) => {
        var products = [];
        data.forEach(product => {
          products.push(product.data);
        });
        callback(null, products);
      })
    })
    .catch((err) => {
      callback(err, null);
    })
};

const retrieveOneProduct = (productId) => {
  return axios.get(`${server}/products/${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
};

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
