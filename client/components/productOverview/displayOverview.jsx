/* eslint-disable react/no-unused-state */
import React from 'react';
import Gallery from './imagesGallery';
import Cart from './cart';
import GiantPopup from './giantPopup';
// import { $, jQuery } from 'jquery';

import requests from '../../requests';
import StyleSelector from './styleSelector';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      style: null,
      selected: 0,
      popup: false,
      image: 0,
    };
    this.sizedWide = true;
    this.getProduct(props);
    this.getStyles(props);

    this.popupClickHandler = this.popupClickHandler.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.resize = this.resize.bind(this);
    this.widthHigh = this.widthHigh.bind(this);
    this.widthLow = this.widthLow.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate(prevProps) {
    //console.log('prevProps ' + prevProps.product);
    //console.log('currentProps ' + this.props.product);
    if (this.props.product !== prevProps.product) {
      this.getProduct(this.props);
      this.getStyles(this.props);
    }
  }

  getProduct(props) {
    requests.getProductInfo(props.product, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          product: data.data,
        });

        if (window.innerWidth <= 750) {
          this.widthLow();
        }
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

  resize() { this.forceUpdate(); }

  popupClickHandler(bool, imageIndex) {
    this.setState({
      popup: bool,
      image: imageIndex,
    });
  }

  changeStyle(index) {
    this.setState({
      selected: index,
    });
  }

  widthHigh() {
    const rightParent = document.getElementById('right-parent');
    const leftParent = document.getElementById('left-parent');
    const backDrop = document.getElementById('back-drop');
    rightParent.style.float = 'right';
    rightParent.style.display = 'inline-block';
    rightParent.style.marginLeft = '0';
    rightParent.style.marginRight = '50px';
    rightParent.style.width = '35%';
    rightParent.style.width = '35%';
    leftParent.style.marginLeft = '50px';
    backDrop.style.width = '50vw';
    backDrop.style.height = '50vw';
    this.sizedWide = true;
  }

  widthLow() {
    const rightParent = document.getElementById('right-parent');
    const leftParent = document.getElementById('left-parent');
    const backDrop = document.getElementById('back-drop');
    rightParent.style.float = 'none';
    rightParent.style.display = 'block';
    rightParent.style.marginLeft = '10%';
    rightParent.style.marginRight = '0';
    rightParent.style.width = '80%';
    leftParent.style.marginLeft = '10%';
    backDrop.style.width = '80vw';
    backDrop.style.height = '80vw';
    this.sizedWide = false;
  }

  render() {
    this.sel = this.state;
    if (!this.sel.style || !this.sel.product) {
      return <div />;
    }
    this.style = this.sel.style;
    this.product = this.sel.product;
    this.selected = this.sel.selected;
    let popup = [];

    if (this.sel.popup) {
      popup = [<GiantPopup
        product={this.product.name}
        style={this.style[this.selected]}
        image={this.sel.image}
        key={-4}
        clickHandler={this.popupClickHandler}
      />];
    } else {
      popup = [];
    }

    if (document.getElementById('back-drop') !== null) {
      if (this.sizedWide === false && window.innerWidth > 750) {
        this.widthHigh();
      } else if (this.sizedWide === true && window.innerWidth <= 750) {
        this.widthLow();
      }
    }

    return (
      <div>
        <div key={-1} id="left-parent" className="left-parent parent">
          <h1>
            <Gallery
              product={this.product.name}
              style={this.style[this.selected]}
              image={this.sel.image}
              clickHandler={this.popupClickHandler}
            />
          </h1>
        </div>
        <div key={-2} id="right-parent" className="right-parent parent">
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
        <div key={-3}>
          {popup}
        </div>
      </div>
    );
  }
}

export default Overview;
