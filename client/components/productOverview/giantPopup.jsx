/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import leftArrow from '../IconsandImages/line-angle-left.png';
import rightArrow from '../IconsandImages/line-angle-right.png';
import exit from '../IconsandImages/exit.png';
import grayDot from '../IconsandImages/gray-dot.png';
import blackDot from '../IconsandImages/black-dot.png';
import minus from '../IconsandImages/minus.png';
import plus from '../IconsandImages/plus.png';

// const sizeOf = require('image-size');

// console.log(sizeOf(`${this.style.photos[this.sel].url}`));

class GiantPopup extends React.Component {
  constructor(props) {
    super(props);
    this.prod = this.props;
    this.state = {
      selected: this.prod.image,
      massive: false,
    };
    this.changeImage = this.changeImage.bind(this);
    this.massiveZoom = this.massiveZoom.bind(this);
    this.useScroll = this.useScroll.bind(this);
  }

  changeImage(index, event) {
    this.setState({
      selected: index,
    });
    event.preventDefault();
  }

  massiveZoom() {
    this.setState({
      massive: true,
    });
  }

  massiveUnzoom() {
    this.setState({
      massive: false,
    });
  }

  // This function needs work. Does not account for aspect ratio of image and all screen sizes.
  useScroll(event) {
    event.target.style.backgroundPositionX = `${-event.nativeEvent.offsetX / (window.innerWidth / 512)}px`;
    event.target.style.backgroundPositionY = `${-event.nativeEvent.offsetY / (window.innerHeight / 512)}px`;
  }

  render() {
    const arrows = [];
    const massive = [];
    this.prod = this.props;
    this.sel = this.state;
    this.massState = this.sel.massive;
    this.sel = this.sel.selected;
    this.style = this.prod.style;
    this.keyMaker = -1;

    if (this.sel !== 0) {
      arrows.push(
        <div key={-9}>
          <img
            src={leftArrow}
            alt="previous image"
            className="left-arrow left-arrow-big"
            key={-5}
          />
          <button
            type="button"
            className="left-arrow left-arrow-big click-component"
            key={-7}
            onClick={(e) => this.changeImage(this.sel - 1, e)}
          >
            -
          </button>
        </div>,
      );
    }

    if (this.sel !== this.style.photos.length - 1) {
      arrows.push(
        <div key={-10}>
          <img
            src={rightArrow}
            alt="next image"
            className="right-arrow right-arrow-big"
            key={-6}
          />
          <button
            type="button"
            className="right-arrow right-arrow-big click-component"
            key={-8}
            onClick={(e) => this.changeImage(this.sel + 1, e)}
          >
            -
          </button>
        </div>,
      );
    }

    if (this.massState) {
      massive.push(
        <div
          key={-14}
          id="massive-highlight"
          className="massive-highlight"
          style={{ cursor: `url('${minus}') 15 15, auto`, backgroundImage: `url('${this.style.photos[this.sel].url}')` }}
          onLoad={(e) => this.addScroll(e)}
          onMouseMove={(e) => this.useScroll(e)}
          onClick={() => this.massiveUnzoom()}
          onKeyDown={() => this.massiveUnzoom()}
        />,
      );
    }
    return (
      <div>
        <div className="massive-overlay" key={-15}>
          {massive}
        </div>
        <div className="popup-parent">
          <button style={{ cursor: 'auto' }} type="button" key={-16} className="popup-button click-component" onClick={() => this.prod.clickHandler(false, this.sel)}>
            -
          </button>
          <img
            style={{ cursor: `url('${plus}') 15 15, auto` }}
            src={this.style.photos[this.sel].url}
            alt={`${this.prod.product} in a ${this.style.name} style.`}
            className="highlight"
            id="massive"
            key={-1}
            onClick={() => this.massiveZoom()}
            onKeyDown={() => this.massiveZoom()}
            onMouseMove={(e) => this.useScroll(e)}
          />
          <img
            src={exit}
            alt="Close the expanded view."
            className="exit-expanded"
            key={-2}
          />
          <button
            type="button"
            className="exit-expanded click-component"
            key={-3}
            onClick={() => this.prod.clickHandler(false, this.sel)}
          >
            -
          </button>
          {arrows}
          {
            this.style.photos.map((data, index) => {
              this.keyMaker += 1;
              this.dotIcon = grayDot;
              this.grayButton = [
                <button
                  key={this.keyMaker + 20}
                  type="button"
                  className="image-click-component click-component"
                  onClick={(e) => this.changeImage(index, e)}
                >
                  -
                </button>,
              ];
              if (index === this.sel) {
                this.dotIcon = blackDot;
                this.grayButton = [];
              }
              return (
                <div
                  id={`expanded-icon${this.keyMaker}`}
                  className="expanded-icon"
                  key={this.keyMaker}
                >
                  <img
                    className="inner-image"
                    key={this.keyMaker + 10}
                    src={this.dotIcon}
                    alt="Icon to change the expanded image."
                  />
                  {this.grayButton}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default GiantPopup;
