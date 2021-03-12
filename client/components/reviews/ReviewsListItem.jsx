/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import FiveStars from './FiveStars';
import Requests from '../../requests';

function ReviewsListItem(props) {
  const title = props.review.body.split('.')[0];
  const date = new Date(props.review.date).toDateString();
  const bigNumber = props.review.rating;

  function reportClickHandler() {
    alert('This review has been reported.');
  }

  function yesButtonClick() {
    Requests.addHelpfull(props.review.review_id, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        alert('Thank you!');
      }
    });
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
      <div className="helpfullAndReport">
        {'Helpfull? '}
        <button type="submit" className="yesButton" onClick={yesButtonClick}>yes</button>
        <sup>{`(${props.review.helpfulness})`}</sup>
        {' | '}
        <button type="submit" className="reportButton" onClick={reportClickHandler}>report</button>
        <hr />
      </div>
    </div>
  );
}

export default ReviewsListItem;
