import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    this.prod = this.props;
    return (
      <img src={this.prod.image} alt={`${this.prod.product} in a ${this.prod.style} style.`} />
    );
  }
}

export default Gallery;
