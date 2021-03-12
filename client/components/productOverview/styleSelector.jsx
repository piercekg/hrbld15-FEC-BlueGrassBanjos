/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React from 'react';
import tickMark from './tick-mark.png';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };

    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle(index, event) {
    this.setState({
      selected: index,
    });

    this.prod.changeStyleParent(index);
    event.preventDefault();
  }

  render() {
    this.prod = this.props;
    this.sel = this.state;
    this.sel = this.sel.selected;
    const values = this.prod.styles;
    const contents = [];

    for (let i = 0; i < values.length; i += 1) {
      if (this.sel === i) {
        contents.push(
          <div className="style-container" key={i}>
            <img className="style-button" src={values[i].photos[0].thumbnail_url} alt={values[i].name} style={{ borderColor: 'green' }} />
            <img className="check-mark" src={tickMark} alt={`Selected the ${values[i].name} style.`} />
          </div>,
        );
      } else {
        contents.push(
          <div className="style-container" key={i}>
            <img className="style-button" src={values[i].photos[0].thumbnail_url} alt={values[i].name} />
            <button className="style-click-component click-component" key={i} onClick={(e) => this.changeStyle(i, e)}> </button>
          </div>,
        );
      }

      if ((i % 4) === 3) {
        contents.push(<br key={`${i}-br`} />);
      }
    }

    return ([
      <h5 key="-2">
        STYLE
        {'  >  '}
        {values[this.sel].name}
      </h5>,
      <div key="-1">
        {contents}
      </div>,
    ]);
  }
}

export default StyleSelector;
