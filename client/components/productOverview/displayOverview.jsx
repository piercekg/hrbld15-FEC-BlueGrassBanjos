/* eslint-disable react/no-unused-state */
import React from 'react';
import Gallery from './imagesGallery';
<<<<<<< HEAD

const requests = require('../../requests.js');
=======
import Cart from './cart';
// import { $, jQuery } from 'jquery';

import requests from '../../requests';
import StyleSelector from './styleSelector';
>>>>>>> currentWork

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      style: null,
<<<<<<< HEAD
    };
    this.getProduct(props);
    this.getStyles(props);
=======
      selected: 0,
    };
    this.getProduct(props);
    this.getStyles(props);

    this.changeStyle = this.changeStyle.bind(this);
>>>>>>> currentWork
  }

  getProduct(props) {
    requests.getProductInfo(props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          product: data.data,
        });
      }
    });
  }

  getStyles(props) {
    requests.getProductStyles(props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          style: data.data.results,
        });
      }
    });
  }

<<<<<<< HEAD
  render() {
    this.prod = this.state;
    if (!this.prod.style || !this.prod.product) {
      return <div />;
    }
    this.style = this.prod.style;
    this.product = this.prod.product;
    // console.log('should be url: ', this.style[0]);
    return (
      <div>
        <h1>
          <Gallery
            image={this.style[0].photos[0].url}
            product={this.product.name}
            style={this.style[0].name}
          />
        </h1>
        <h1>{this.product.name}</h1>
        <h5>{this.product.default_price}</h5>
        <h3>{this.product.category}</h3>
=======
  changeStyle(index) {
    this.setState({
      selected: index,
    });
  }

  render() {
    this.sel = this.state;
    if (!this.sel.style || !this.sel.product) {
      return <div />;
    }
    this.style = this.sel.style;
    this.product = this.sel.product;
    this.selected = this.sel.selected;
    return (
      <div>
        <div className="left-parent parent">
          <h1>
            <Gallery
              product={this.product.name}
              style={this.style[this.selected]}
            />
          </h1>
        </div>
        <div className="right-parent parent">
          <h3>Stars go here</h3>
          <h3>{this.product.category}</h3>
          <h1>{this.product.name}</h1>
          <h5>{this.product.default_price}</h5>
          <div>
            <StyleSelector
              styles={this.style}
              changeStyleParent={this.changeStyle}
              currentStyle={this.selected}
            />
            <Cart
              style={this.style[this.selected].skus}
            />
          </div>
          <h5>{this.product.slogan}</h5>
          <p>{this.product.description}</p>
        </div>
>>>>>>> currentWork
      </div>
    );
  }
}

<<<<<<< HEAD
=======
// (function ($) {
//   var _window = { w: window };

//   function adjust_dfs(e) {
//     var _fsx, _fsy, _fs, _adj, _n;

//     _window.x = _window.w.innerWidth || _window.e.clientWidth || _window.g.clientWidth;
//     _window.y = _window.w.innerHeight || _window.e.clientHeight || _window.g.clientHeight;
//     var _fsx = (_window.x / 1024) * 16;
//     var _fsy = (_window.y / 768) * 16;
//     var _fs = (_window.x > _window.y ? ((_fsx + _fsy) * 0.5) : _fsx);
//     if (_fs < 8) {
//       _fs = 8;
//     }
//     if (_fs > 20) {
//       _fs = 20;
//     }
//     _n = parseFloat(_fs, 10).toFixed(2);
//     _adj = {
//       fontSize: _n + 'px'
//     };
//     $('.dfs').css(_adj);
//   }
//   adjust_dfs();
//   $(window).on('resize', adjust_dfs);
// }(jQuery));

>>>>>>> currentWork
export default Overview;
