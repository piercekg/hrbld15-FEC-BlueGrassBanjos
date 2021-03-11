import React from 'react';

const StarRating = (props) => {
  if (!props.rating) {
    return (
      <div className="stars">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    );
  } else if (props.rating < 1.5) {
    return (
      <div className="stars">
        <span>⭐</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    );
  } else if (props.rating < 2.5) {
    return (
      <div className="stars">
        <span>⭐</span><span>⭐</span><span>☆</span><span>☆</span><span>☆</span>
      </div>
    );
  } else if (props.rating < 3.5) {
    return (
      <div className="stars">
        <span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span><span>☆</span>
      </div>
    );
  } else if (props.rating < 4.5) {
    return (
      <div className="stars">
        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>☆</span>
      </div>
    );
  } else if (props.rating <= 5) {
    return (
      <div className="stars">
        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
      </div>
    );
  }
};

export default StarRating;

/*
  return (
    <div className="stars">
      <span>⭐</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
  );

  const FiveStars = (props) => {
  console.log(props.rating);
  if (!props.rating) {
    return (
      <div className="star-ratings-css">
        <div className="star-ratings-css-bottom">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{ width: props.rating + '%'}}>
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div className="star-ratings-css-bottom">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    );
  }
};
*/