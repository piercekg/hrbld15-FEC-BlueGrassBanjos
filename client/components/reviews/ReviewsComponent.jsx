/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';
import Requests from '../../requests';
import AddReview from './AddReview';

class ReviewsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: {},
      toggleModel: false,
    };
    this.report = this.report.bind(this);
    this.showModel = this.showModel.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.getRelevantReviews = this.getRelevantReviews.bind(this);
    this.getMostRecentReviews = this.getMostRecentReviews.bind(this);
  }

  componentDidMount() {
    this.getRelevantReviews();
  }

  getRelevantReviews() {
    console.log(this.props.product);
    Requests.getRelevantReviews(this.props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data.data);
        this.setState({
          reviewsData: data.data,
        });
      }
    });
  }

  getMostRecentReviews() {
    Requests.getMostRecentReviews(this.props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data.data);
        // this.setState({
        //   reviewsData: data.data,
        // });
      }
    });
  }

  report() {
    console.log('reported');
  }

  showModel() {
    if (this.state.toggleModel === false) {
      this.setState({
        toggleModel: true,
      });
    } else {
      this.setState({
        toggleModel: false,
      });
    }
  }

  submitReview(reviewData) {
    Requests.postReview(reviewData, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div className="container-fluid rnrComponent">
        <div className="rnrTitle">RATINGS & REVIEWS</div>
        <div className="inline">
          <div className="ratingsDiv">
            <Ratings reviewsData={this.state.reviewsData} />
          </div>
          {this.state.toggleModel ? <AddReview reviewsData={this.state.reviewsData} showModel={this.showModel} submitReview={this.submitReview} /> : null}
          <div className="reviewsDiv">
            <Reviews
              reviewsData={this.state.reviewsData}
              report={this.report}
              showModel={this.showModel}
              getRelevantReviews={this.getRelevantReviews}
              getMostRecentReviews={this.getMostRecentReviews}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewsComponent;
