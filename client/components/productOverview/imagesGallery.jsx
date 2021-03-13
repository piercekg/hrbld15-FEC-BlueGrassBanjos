/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
import React from 'react';
import leftArrow from '../IconsandImages/line-angle-left.png';
import rightArrow from '../IconsandImages/line-angle-right.png';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.prod = this.props;
    this.sel = this.state;
    this.state = {
      selected: this.prod.image,
      style: this.prod.style,
    };

    this.changeImage = this.changeImage.bind(this);
    this.updateHighlight = this.updateHighlight.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const result = {};
    if (props.image !== state.selected) {
      result.selected = props.image;
    }
    if (state.style !== props.style) {
      result.style = props.style;
      result.selected = 0;
    }
    if (result) {
      return result;
    }
    return null;
  }

  componentDidUpdate() {
    this.prod = this.props;
    if (this.sel !== this.sel.selected) {
      this.sel = this.state;
      this.updateHighlight(this.sel.selected);
    }
    this.sel = this.state;
    this.sel = this.sel.selected;
  }

  changeImage(index, event) {
    this.setState({
      selected: index,
    });
    this.updateHighlight(index);
    this.prod.clickHandler(false, index);
    event.preventDefault();
  }

  updateHighlight(index) {
    if (this.selectedPicture) {
      this.selectedPicture.style.opacity = '0.6';
    }
    this.selectedPicture = document.getElementById(`thumbnail${index}`);
    this.selectedPicture.style.opacity = '1';
  }

  render() {
    const arrows = [];
    this.prod = this.props;
    this.sel = this.state;
    this.sel = this.sel.selected;
    this.style = this.prod.style;
    this.keyMaker = -1;

    if (this.sel !== 0) {
      arrows.push(
        <div key={-9}>
          <img
            src={leftArrow}
            alt="previous image"
            className="left-arrow"
            key={-5}
          />
          <button type="button" className="left-arrow click-component" key={-7} onClick={(e) => this.changeImage(this.sel - 1, e)}> </button>
        </div>,
      );
    }

    if (this.sel !== this.style.photos.length - 1) {
      arrows.push(
        <div key={-10}>
          <img
            src={rightArrow}
            alt="next image"
            className="right-arrow"
            key={-6}
          />
          <button type="button" className="right-arrow click-component" key={-8} onClick={(e) => this.changeImage(this.sel + 1, e)}> </button>
        </div>,
      );
    }

    return (
      <div id="back-drop" className="gallery-parent">
        <img
          type="button"
          src={this.style.photos[this.sel].url}
          alt={this.style.name}
          className="highlight"
          style={{ cursor: 'zoom-in' }}
          onClick={() => this.prod.clickHandler(true, this.sel)}
          onKeyDown={() => this.prod.clickHandler(true, this.sel)}
        />
        {arrows}
        {this.style.photos.map((data, index) => {
          this.keyMaker += 1;
          if (index === this.style.photos.length - 1) {
            return (
              <div id={`thumbnail${this.keyMaker}`} className="inner-backdrop" key={this.keyMaker} onLoad={() => this.updateHighlight(this.sel)}>
                <img className="inner-image" src={data.thumbnail_url} alt={`${this.prod.product} in a ${this.style.name} style.`} />
                <button type="button" className="click-component image-click-component" onClick={(e) => this.changeImage(index, e)}> </button>
              </div>
            );
          }
          return (
            <div id={`thumbnail${this.keyMaker}`} className="inner-backdrop" key={this.keyMaker}>
              <img className="inner-image" src={data.thumbnail_url} alt={`${this.prod.product} in a ${this.style.name} style.`} />
              <button type="button" className="click-component image-click-component" onClick={(e) => this.changeImage(index, e)}> </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
