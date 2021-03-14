/* eslint-disable radix */
/* eslint-disable object-shorthand */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

function AddReview(props) {
  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
  };

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  };

  const cancelReview = () => {
    props.showModel();
  };

  const addNewReview = (e) => {
    e.preventDefault();
    if (document.getElementById('title').value === '') {
      alert('Please give your post a title');
    } else if (document.getElementById('username').value === '') {
      alert('Please add your username');
    } else if (document.getElementById('email').value === '') {
      alert('Please add your email');
    } else if (document.getElementById('body').value === '') {
      alert('In order to submit a review you must add text to the body');
    } else if (document.getElementById('rating').value === '') {
      alert('Please enter a rating for the producy you are reviewing');
    } else if (document.getElementById('recommend').value === '') {
      alert('Please enter yes or no');
    } else {
      let recommend = false;
      if (document.getElementById('recommend').value === 'yes' || document.getElementById('recommend').value === 'Yes') {
        recommend = true;
      }
      const reviewData = {
        product_id: parseInt(props.reviewsData.product),
        rating: parseInt(document.getElementById('rating').value),
        summary: document.getElementById('title').value,
        body: document.getElementById('body').value,
        recommend: recommend,
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        photos: [],
        characteristics: {},
      };
      props.submitReview(reviewData);
      cancelReview();
    }
  };

  return (
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        <form>
          <h3>Add a review for: </h3>
          <div>{props.reviewsData.product}</div>
          <label>Title: </label>
          <input placeholder="Title here" id="title" />
          <br />
          <label>Username: </label>
          <input placeholder="Username here" id="username" />
          <br />
          <label>Email: </label>
          <input placeholder="Email here" id="email" />
          <br />
          <label>Body: </label>
          <br />
          <textarea cols="50" rows="10" placeholder="Write your review here" id="body" />
          <br />
          <label>Rating:</label>
          <input type="number" min="1" max="5" id="rating" />
          <br />
          <label>Recommend:</label>
          <input placeholder="Yes or No" id="recommend" />
          <br />
          <br />
          <button style={{ width: '50%' }} onClick={addNewReview}>Submit</button>
          <button style={{ width: '50%' }} onClick={cancelReview}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddReview;
