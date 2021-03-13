const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('../config.js')

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld'

// ENTIRE PRODUCT LIST REQUEST
// to read list with postman
app.get('/products', (req, res) => {
  retrieveAll((err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err);
    } else {
      res.status(200).send(data.data);
    }
  })
})

const retrieveAll = (callback) => {
  axios.get(`${server}/products`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((data) => {
    callback(null, data);
  })
  .catch((err) => {
    callback(err, null);
  })
};


// PRODUCTS REQUESTS
app.get('/products/:product_id', (req, res) => {
  retrieveProduct(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
});

const retrieveProduct = (productId, callback) => {
  axios.get(`${server}/products/${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((product) => {
    return retrieveRelatedProductReviews([productId], [product.data])
  })
  .then((result) => {
    return retrieveRelatedProductStyles([productId], result)
  })
  .then((completeResult) => {
    callback(null, completeResult[0]);
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
  axios.get(`${server}/products/${productId}/related`, {headers: {Authorization: `${config.TOKEN}`}})
  .then((ids) => {
    var uniqueIds = [...new Set(ids.data)];
    return Promise.all(uniqueIds.map(retrieveOneProduct))
    .then((data) => {
      var products = [];
      data.forEach(product => {
        products.push(product.data);
      });
      return retrieveRelatedProductReviews(uniqueIds, products)
      })
      .then((result) => {
        return retrieveRelatedProductStyles(uniqueIds, result)
      })
      .then((completeResult) => {
        callback(null, completeResult);
      })
    })
  .catch((err) => {
    callback(err, null);
  })
};

const retrieveOneProduct = (productId) => {
  return axios.get(`${server}/products/${productId}`, {headers: {Authorization: `${config.TOKEN}`}})
};

const retrieveRelatedProductReviews = (productIds, products) => {
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
};

const retrieveRelatedProductStyles = (productIds, products) => {
  return Promise.all(productIds.map(retrieveOneProductsStyles))
  .then((data) => {
    var styles = [];
    data.forEach(product => {
      styles.push(product.data);
    })
    return buildRelatedProducts(products, styles);
  })
};

const retrieveOneProductsStyles = (productId) => {
  return axios.get(`${server}/products/${productId}/styles`, {headers: {Authorization: `${config.TOKEN}`}});
};

const buildRelatedProducts = (products, reviews) => {
  var completeProducts = [];
  products.forEach(product => {
    reviews.forEach(review => {
      if (product.id === Number(review.product)) {
        product.reviews = review.results;
        completeProducts.push(product);
      }
      if (product.id === Number(review.product_id)) {
        product.styles = review.results;
        completeProducts.push(product);
      }
    });
  });
  return completeProducts;
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
axios.get(`${server}/reviews/?product_id=${productId}`, {headers: {'Authorization': `${config.TOKEN}`}})
.then ((res) => {
  callback(null, res.data);
})
.catch ((res) => {
  callback(res, null)
})
};

//`${server}/products/${ids[0]}/reviews/${ids[1]}/helpful`
app.put('/reviews/:review_id/helpful', (req, res) => {
  addHelpful(req.params.review_id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).send(data);
    }
  })
});

const addHelpful = (review_id, callback) => {
axios.put(`${server}/reviews/${review_id}/helpful`, 'addHelpful', {headers: {Authorization: `${config.TOKEN}`}})
.then(() => {
  callback();
})
.catch((err) => {
  console.log(err);
})
}

// QUESTIONS AND ANSWERS REQUESTS

app.use(express.urlencoded({ extended: true}));

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

app.post('/qa/questions/', (req, res) => {

  const questionData = {}
  questionData.body = req.body.body;
  questionData.name = req.body.name;
  questionData.email = req.body.email;
  questionData.product_id = parseInt(req.body.product_id);

  console.log(questionData);

  postNewQuestion(questionData, () => {
      res.sendStatus(201);
      console.log('Question Posted')
      res.end()
  })
})

const postNewQuestion = (questionData, callback) => {
  axios.post(`${server}/qa/questions/`, questionData, {headers: {Authorization: `${config.TOKEN}`}})
  .then(() => {
    callback();
  })
  .catch((err) => {
    console.log(err);
  })
};

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const updateId = req.body.question_id;
  updateQuestionHelpful(updateId, () => {
    res.sendStatus(201);
    console.log('Question Helpful Updated')
    res.end()
  })
})

const updateQuestionHelpful = (updateId, callback) => {
  console.log(updateId);
  const stringifed = JSON.stringify(updateId);
  console.log(stringifed);

  axios.put(`${server}/qa/questions/${updateId}/helpful`, stringifed, {headers: {Authorization: `${config.TOKEN}`}})
  .then(() => {
    callback();
  })
  .catch((err) => {
    console.log(err);
  })
};

  // Answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  retrieveProductAnswers(req.query.question_id, (err, response) => {
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
    console.log('ERROR AT RETRIEVEPRODUCTANSWERS');
    console.log(err, null)
  })
};

app.post('/qa/questions/answers', (req, res) => {
  const questionId = req.body.question_id;

  const answerData = {};
  answerData.body = req.body.answer;
  answerData.name = req.body.username;
  answerData.email = req.body.email;
  answerData.photos = [];

  postNewAnswer(questionId, answerData, () => {
    res.sendStatus(201);
    console.log('Answer Posted');
    console.log(answerData);
    res.end();
  })
})

const postNewAnswer = (questionId, answerData, callback) => {
  axios.post(`${server}/qa/questions/${questionId}/answers`, answerData, {headers: {Authorization: `${config.TOKEN}`}})
  .then(() => {
    callback();
  })
  .catch((err) => {
    console.log(err);
  })
}

app.put('/qa/answers', (req, res) => {
  const updateId = req.body.answer_id;

  updateAnswerHelpful(updateId, () => {
    res.sendStatus(201);
    console.log('Answer Helpful Updated');
    res.end();
  })
})

const updateAnswerHelpful = (updateId, callback) => {
  const stringified = JSON.stringify(updateId);

  axios.put(`${server}/qa/answers/${updateId}/helpful`, stringified, {headers: {Authorization: `${config.TOKEN}`}})
  .then(() => {
    callback();
  })
  .catch((err) => {
    console.log(err);
  })
}

app.put('/qa/answers/report', (req, res) => {
  const answerId = req.body.answer_id;

  reportAnswer(answerId, () => {
    res.sendStatus(201);
    console.log('Answer Reported');
    res.end();
  })
})

const reportAnswer = (answerId, callback) => {
  const stringified = JSON.stringify(answerId);

  axios.put(`${server}/qa/answers/${answerId}/report`, stringified, {headers: {Authorization: `${config.TOKEN}`}})
  .then(() => {
    callback();
  })
  .catch((err) => {
    console.log(err);
  })
}

app.use(express.json());

// CART REQUESTS

// INTERACTIONS REQUESTS

// SERVER AND PORT

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/../client/dist/index.html'))
})

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
