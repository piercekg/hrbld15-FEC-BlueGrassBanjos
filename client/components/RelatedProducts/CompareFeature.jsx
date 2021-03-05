import React from 'react';

const CompareFeature = (props) => (
  <div className="compare-row">
    <div className="compare-data col-left">{props.selectedFeatures[props.feature] !== undefined ? (props.selectedFeatures[props.feature] !== null ? props.selectedFeatures[props.feature] : '✔️') : null}</div>
    <div className="compare-data col-center">{props.feature}</div>
    <div className="compare-data col-right">{props.compareFeatures[props.feature] !== undefined ? (props.compareFeatures[props.feature] !== null ? props.compareFeatures[props.feature] : '✔️') : null}</div>
  </div>
);

export default CompareFeature;
