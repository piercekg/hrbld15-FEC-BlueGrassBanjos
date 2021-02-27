import React from 'react';

const ComparisonModal = (props) => (
  <div>
    <div className="comapre-table">
      <div className="compare-header compare-row">
        <div className="compare-data">{props.selectedProduct.name}</div>
        <div className="compare-data">Features:</div>
        <div className="compare-data">{props.product.name}</div>
      </div>
      <div className="compare-row">
        <div className="compare-data">checkmark</div>
        <div className="compare-data">{props.selectedProduct.features[0].feature}</div>
        <div className="compare-data">null</div>
      </div>
      <div className="compare-row">
        <div className="compare-data">null</div>
        <div className="compare-data">{props.product.features[0].feature}</div>
        <div className="compare-data">checkmark</div>
      </div>
    </div>
    {console.log(props.product.features)}
  </div>
);

export default ComparisonModal;

/*

*/