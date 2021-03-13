/* eslint-disable no-console */

const axios = require('axios');

// const server = 'http://13.59.149.180';
const server = 'http://localhost:3000';

const requests = {

  // PRODUCTS REQUESTS
  getProductInfo(productId, callback) {
    axios.get(`${server}/products/${productId}`)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  getProductStyles(productId, callback) {
    axios.get(`${server}/products/${productId}/styles`)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  // RELATED PRODUCTS REQUESTS
  getRelatedProducts(productId, callback) {
    axios.get(`${server}/products/${productId}/related`)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  // REVIEWS REQUESTS
  getReviews(productId, callback) {
    axios.get(`${server}/products/${productId}/reviews`)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  addHelpfull(reviewId, callback) {
    axios.put(`${server}/reviews/${reviewId}/helpful`)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  // postReview(reviewId, callback) {
  //   callback('works');
  //   // axios.post(`${server}/products/${productId}/reviews`)
  //   //   .then((data) => {
  //   //     callback(null, data);
  //   //   })
  //   //   .catch((err) => {
  //   //     callback(err, null);
  //   //   });
  // },

  // QUESTIONS AND ANSWERS REQUESTS
  getCurrentProductQuestions(currentProductId, callback) {
    axios.get(`${server}/qa/questions`, { params: { product_id: `${currentProductId}` } })
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  getCurrentProductAnswers(questionId, callback) {
    axios.get(`${server}/qa/questions/:question_id/answers`, { params: { question_id: `${questionId}` } })
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      });
  },

  postNewAnswer(answerData, callback) {
    axios.post(`${server}/qa/questions/answers`, answerData)
      .then(() => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },

  postNewQuestion(questionData, callback) {
    axios.post(`${server}/qa/questions`, questionData)
      .then(() => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateQuestionHelpful(updateData, callback) {
    axios.put(`${server}/qa/questions/:question_id/helpful`, updateData)
      .then(() => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },

  updateAnswerHelpful(updateData, callback) {
    axios.put(`${server}/qa/answers`, updateData)
      .then(() => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },

  reportAnswer(updateData, callback) {
    axios.put(`${server}/qa/answers/report`, updateData)
      .then(() => {
        callback();
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // CART REQUESTS

  // INTERACTIONS REQUESTS

};

export default requests;
