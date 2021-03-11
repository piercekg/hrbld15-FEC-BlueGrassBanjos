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
  var combinedFeatures = Object.keys(selectedFeatures).concat(Object.keys(compareFeatures));
  var uniqueCombinedFeatures = [...new Set(combinedFeatures)];

  return (
    <div className="compare-modal">
      <div className="comapare-table">
        <div className="compare-row">
          <div className="compare-data">COMPARING</div>
          <button type="button" className="btn btn-default btn-xs" onClick={() => props.onClick()}>✖️</button>
        </div>
        <div className="compare-header compare-row">
          <div className="compare-data col-left">{props.selectedProduct.name}</div>
          <div className="compare-data col-center"></div>
          <div className="compare-data col-right">{props.product.name}</div>
        </div>
          {uniqueCombinedFeatures.map(feature => {
            return (<CompareFeature feature={feature} selectedFeatures={selectedFeatures} compareFeatures={compareFeatures} key={feature}/>)
          })}
      </div>
    </div>
  );
};

export default ComparisonModal;

/*
        <div className="compare-row">
        <div className="compare-data">null</div>
        <div className="compare-data">{props.product.features[0].feature}</div>
        <div className="compare-data">checkmark</div>
      </div>
*/