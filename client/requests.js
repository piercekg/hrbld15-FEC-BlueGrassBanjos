const axios = require('axios');

const server = 'http://localhost:3000';

// Requests go here
const requests = {
  // PRODUCTS REQUESTS
  getSelectedProduct(productId, callback) {
    axios.get(`${server}/products/${productId}`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
  },

  // RELATED PRODUCTS REQUESTS
  getRelatedProducts(productId, callback) {
    axios.get(`${server}/products/${productId}/related`)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      })
  }

  // REVIEWS REQUESTS
  /*
  getProductReviews(productId, callback) {
    axios.get(`${server}/reviews?product_id=${productId}`)
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        callback(err, null);
      })
  }
  */
  // QUESTIONS AND ANSWERS REQUESTS

  // CART REQUESTS

  // INTERACTIONS REQUESTS
};



export default requests;