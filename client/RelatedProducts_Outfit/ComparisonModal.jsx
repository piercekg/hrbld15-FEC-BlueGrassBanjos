import React from 'react';
import CompareFeature from './CompareFeature.jsx';

const ComparisonModal = (props) => {
  var selectedFeatures = {};
  props.selectedProduct.features.forEach(feature => {
    selectedFeatures[feature.feature] = feature.value;
  });
  var compareFeatures = {};
  props.product.features.forEach(feature => {
    compareFeatures[feature.feature] = feature.value;
  });
  var combinedFeatures = Object.assign(selectedFeatures, compareFeatures);
  combinedFeatures = Object.keys(combinedFeatures);

  return (<div>
    <div className="comapre-table">
      <strong>Comparing</strong>
      <button type="button" className="compareAction" onClick={() => props.onClick()}>X icon</button>
      <div className="compare-header compare-row">
        <div className="compare-data">{props.selectedProduct.name}</div>
        <div className="compare-data">Features:</div>
        <div className="compare-data">{props.product.name}</div>
      </div>
        {combinedFeatures.map(feature => {
          return (<CompareFeature feature={feature} selectedFeatures={selectedFeatures} compareFeatures={compareFeatures} key={feature}/>)
        })}
    </div>
  </div>);
};

export default ComparisonModal;

/*
        <div className="compare-row">
        <div className="compare-data">null</div>
        <div className="compare-data">{props.product.features[0].feature}</div>
        <div className="compare-data">checkmark</div>
      </div>
*/