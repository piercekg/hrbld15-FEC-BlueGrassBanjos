const axios = require('axios');

const server = 'http://localhost:3000';

const requests = {

  // PRODUCTS REQUESTS

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

  // CART REQUESTS

  // INTERACTIONS REQUESTS

};

export default requests;
