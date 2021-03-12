/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-unused-state */
/* eslint-disable arrow-body-style */
import React from 'react';
import leftArrow from './line-angle-left.png';
import rightArrow from './line-angle-right.png';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.prod = this.props;
    this.state = {
      selected: 0,
    };

    this.changeImage = this.changeImage.bind(this);
  }

  // componentDidMount() {
  //   console.log('mounted');
  //   this.setState({
  //     selected: 0,
  //   });
  // }

  changeImage(index, event) {
    this.setState({
      selected: index,
    });
    event.preventDefault();
  }

  render() {
    const arrows = [];
    this.prod = this.props;
    this.sel = this.state;
    this.sel = this.sel.selected;
    if (this.style !== this.prod.style) {
      this.setState({
        selected: 0,
      });
    }
    this.style = this.prod.style;
    this.keyMaker = -1;

    if (this.sel !== 0) {
      arrows.push(
        <div key={-9}>
          <img
            src={leftArrow}
            alt="previous image"
            className="left-arrow left-arrow-image"
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
            className="right-arrow right-arrow-image"
            key={-6}
          />
          <button type="button" className="right-arrow click-component" key={-8} onClick={(e) => this.changeImage(this.sel + 1, e)}> </button>
        </div>,
      );
    }

    return (
      <div className="gallery-parent back-drop">
        <img
          src={this.style.photos[this.sel].url}
          alt={this.style.name}
          className="highlight"
        />
        {arrows}
        {this.style.photos.map((data, index) => {
          this.keyMaker += 1;
          return (
            <div className={`inner-backdrop thumbnail${this.keyMaker}`} key={this.keyMaker}>
              <img className="inner-image" src={data.thumbnail_url} alt={`${this.prod.product} in a ${this.style.name} style.`} />
              <button type="button" className="image-click-component" onClick={(e) => this.changeImage(index, e)}> </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
