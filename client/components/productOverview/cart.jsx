/* eslint-disable react/no-unused-state */
import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: -1,
      quantity: 1,
      available: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const targ = event.target;
    const nm = targ.name;
    const value = targ.value * 1;
    this.setState({
      [nm]: value,
    });
    if (nm === 'size') {
      this.setState({
        size: value,
        quantity: 1,
        available: this.sku[this.skuArray[targ.value]].quantity || 0,
      });
    } else if (nm === 'quantity') {
      this.setState({
        quantity: targ.value,
      });
    }
  }

  render() {
    let keyMaker = -1;
    this.prod = this.props;
    if (this.sku !== this.prod.style) {
      this.setState({
        size: -1,
      });
    }
    this.sku = this.prod.style;
    this.sel = this.state;
    this.size = this.sel.size;
    this.quantity = this.sel.quantity;
    this.avail = this.sel.available;
    this.skuArray = Object.keys(this.sku);
    let cartNum = [];
    if (this.size === -1) {
      cartNum = [<option key={0} value={0}>-</option>];
    } else {
      for (let i = 1; i <= this.avail && i <= 15; i += 1) {
        cartNum.push(<option key={i} value={i}>{i}</option>);
      }
    }

    return (
      <div>
        <select name="size" value={this.size} onChange={this.handleChange}>
          <option value={-1}>Select Size</option>
          {this.skuArray.map((data, index) => {
            keyMaker += 1;
            if (this.sku[data].quantity > 0) {
              return (
                <option key={keyMaker} value={index}>
                  {this.sku[data].size}
                </option>
              );
            }
            return null;
          })}
        </select>
        <select name="quantity" value={this.quantity} onChange={this.handleChange} disabled={this.size === -1}>
          {cartNum}
        </select>
      </div>
    );
  }
}

export default Cart;
