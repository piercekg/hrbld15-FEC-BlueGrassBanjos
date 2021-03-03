const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('../config_example.js')

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld'

// PRODUCTS REQUESTS
app.get('/products/:product_id', (req, res) => {
  retrieveSelectedProduct(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data);
    }
  });
});

const retrieveSelectedProduct = (productId, callback) => {
  axios.get(`${server}/products/${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((product) => {
    return retireveRelatedProductReviews([productId], [product.data])
  })
  .then((result) => {
    callback(null, result[0]);
  })
  .catch((err) => {
    callback(err, null);
  })
};

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
    var uniqueIds = [...new Set(ids.data)];
    return Promise.all(uniqueIds.map(retrieveOneProduct))
    .then((data) => {
      var products = [];
      data.forEach(product => {
        products.push(product.data);
      });
      return retireveRelatedProductReviews(uniqueIds, products)
      })
      .then((result) => {
        callback(null, result);
      })
    })
  .catch((err) => {
    callback(err, null);
  })
};

const retrieveOneProduct = (productId) => {
  return axios.get(`${server}/products/${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
};

const retireveRelatedProductReviews = (productIds, products) => {
  return Promise.all(productIds.map(retrieveOneProductsReviews))
  .then((data) => {
    var reviews = [];
    data.forEach(product => {
      reviews.push(product.data);
    })
    return buildRelatedProducts(products, reviews);
  })
};

const retrieveOneProductsReviews = (productId) => {
  return axios.get(`${server}/reviews?product_id=${productId}`, {headers: {Authorization: `${config.TOKEN}`}});
}

const buildRelatedProducts = (products, reviews) => {
  var completeProducts = [];
  products.forEach(product => {
    reviews.forEach(review => {
      if (product.id === Number(review.product)) {
        var completeProduct = Object.assign(product, review);
        completeProducts.push(completeProduct);
      }
    });
  });
  return completeProducts;
};

// REVIEWS REQUESTS
app.get(`/reviews`, (req, res) => {
  retrieveProductReviews(req.query.product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(data.data);
    }
  });
});

const retrieveProductReviews = (productId, callback) => {
  axios.get(`${server}/reviews?product_id=${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((reviews) => {
    callback(null, reviews);
  })
  .catch((err) => {
    callback(err, null);
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
