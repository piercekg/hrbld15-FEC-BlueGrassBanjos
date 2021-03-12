/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import Requests from '../../requests';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: {},
    };
    this.report = this.report.bind(this);
  }

  componentDidMount() {
    Requests.getReviews(this.props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          reviewsData: data.data,
        });
      }
    });
  }

  report() {
    console.log('reported');
  }

  render() {
    return (
      <div className="rnrComponent">
        <div className="rnrTitle">RATINGS & REVIEWS</div>
        <div className="inline">
          <div className="ratingsDiv">
            <Ratings reviewsData={this.state.reviewsData} />
          </div>
          <div className="reviewsDiv">
            <Reviews reviewsData={this.state.reviewsData} report={this.report} />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsComponent;
