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
  postNewQuestion(req.body, () => {
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
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
