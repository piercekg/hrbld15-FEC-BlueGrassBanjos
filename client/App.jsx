/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
<<<<<<< HEAD
import Overview from './productOverview/displayOverview';
// import ReviewsComponent from './components/reviews/ReviewsComponent';
=======
import RelatedProducts_Outfit from './components/RelatedProducts_Outfit/RelatedProducts_Outfit'
import Overview from './components/productOverview/displayOverview';
>>>>>>> currentWork
import QandA from './components/QandA/QandA';
import Requests from './requests';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import ReviewsComponent from './components/reviews/ReviewsComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      product: this.props.match.params.id,
      reviewsData: {},
=======
      product: 18080,
>>>>>>> currentWork
    };
  }

  componentDidMount() {
    // Requests.default.getReviews(18201, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     this.setState({
    //       reviewsData: data.data,
    //     });
    //   }
    // });

    // this.setState({
    //   product: this.props.match.params.id,
    // });
    // console.log(this.props.match.params);
  }

  render() {
    const prod = this.state;
    return (
<<<<<<< HEAD
      <div>
        <div className="hello">Hello World!!!!</div>
        <Overview product={prod.product} />
        <RelatedProducts selectedProduct={this.state.product} />
        <QandA productId={prod.product} />
        <ReviewsComponent reviewsData={this.state.reviewsData} />
      </div>
=======
      <Router>
        <Overview product={prod.product} />
        <RelatedProducts_Outfit />
        <QandA />
      </Router>
>>>>>>> currentWork
    );
  }
}

export default App;
