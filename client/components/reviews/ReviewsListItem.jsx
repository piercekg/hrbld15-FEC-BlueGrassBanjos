/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React from 'react';
import FiveStars from './FiveStars';

function ReviewsListItem(props) {
  const title = props.review.body.split('.')[0];
  const date = new Date(props.review.date).toDateString();
  const bigNumber = props.review.rating;

  function reportClickHandler() {
    alert('This review has been reported.');
  }

  function yesButtonClick() {
    axios.put();
  }

  return (
    <div>
      <br />
      <div className="listItemFirstLine">
        <div className="lIFS">
          <FiveStars bigNumber={bigNumber} />
        </div>
        <div className="usernameAndDate">
          {`${props.review.reviewer_name}, ${date}`}
        </div>
      </div>
      <h4>{title}</h4>
      <div>{props.review.body}</div>
      <div>
        {'Helpfull? '}
        <button type="submit" onClick={yesButtonClick}>yes</button>
        <sup>{`(${props.review.helpfulness})`}</sup>
        {' | '}
        <button type="submit" onClick={reportClickHandler}>report</button>
        <hr />
      </div>
    </div>
  );
}

export default ReviewsListItem;
