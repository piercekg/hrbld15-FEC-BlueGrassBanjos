const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('../config.js')

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld'

// PRODUCTS REQUESTS
app.get('/products/:product_id', (req, res) => {
  retrieveProduct(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err.message);
      res.send(err);
    } else {
      res.status(200).send(data.data);
    }
  })
});

const retrieveProduct = (productId, callback) => {
  axios.get(`${server}/products/${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
};

app.get('/products/:product_id/styles', (req, res) => {
  retrieveStyle(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err.message);
      res.send(err);
    } else {
      res.status(200).send(data.data);
    }
  })
});

const retrieveStyle = (productId, callback) => {
  axios.get(`${server}/products/${productId}/styles`, {headers: {Authorization: `${config.TOKEN}`}})
    .then((data) => {
      callback(null, data);
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

  // Questions
app.get('/qa/questions/', (req, res) => {
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
  axios.get(`${server}/qa/questions?product_id=${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((questions) => {
    callback(null, questions);
  }).catch((err) => {
    console.log(err, null);
  })
};

  // Answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  console.log(req.params);
  retrieveProductAnswers(req.params.question_id, (err, response) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(response.data);
    }
  })
});

const retrieveProductAnswers = (questionId, callback) => {
  axios.get(`${server}/qa/questions/${questionId}/answers`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((question) => {
    callback(null, question);
  }).catch((err) => {
    console.log(err, null)
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
