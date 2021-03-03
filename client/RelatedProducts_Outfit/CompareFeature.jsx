import React from 'react';

const CompareFeature = (props) => (
  <div className="compare-row">
    <div className="compare-data">{props.selectedFeatures[props.feature] !== undefined ? (props.selectedFeatures[props.feature] !== null ? props.selectedFeatures[props.feature] : 'checkmark') : 'blank'}</div>
    <div className="compare-data">{props.feature}</div>
    <div className="compare-data">{props.compareFeatures[props.feature] !== undefined ? (props.compareFeatures[props.feature] !== null ? props.compareFeatures[props.feature] : 'checkmark') : 'blank'}</div>
  </div>

);

export default CompareFeature;