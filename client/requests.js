/* eslint-disable no-console */
const axios = require('axios');

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

  // CART REQUESTS

  // INTERACTIONS REQUESTS

};

export default requests;
