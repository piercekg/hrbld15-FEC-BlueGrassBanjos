/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
import React from 'react';
import anychart from 'anychart';

function StarList({ reviewsData }) {
  let five = 0;
  let four = 0;
  let three = 0;
  let two = 0;
  let one = 0;
  if (reviewsData.results !== undefined) {
    for (let i = 0; i < reviewsData.results.length; i++) {
      if (reviewsData.results[i].rating === 5) {
        five += 1;
      } else if (reviewsData.results[i].rating === 4) {
        four += 1;
      } else if (reviewsData.results[i].rating === 3) {
        three += 1;
      } else if (reviewsData.results[i].rating === 2) {
        two += 1;
      } else if (reviewsData.results[i].rating === 1) {
        one += 1;
      }
    }
  }
  const chartData = [
    ['5 stars', five],
    ['4 stars', four],
    ['3 stars', three],
    ['2 stars', two],
    ['1 stars', one],
  ];
  const chart = anychart.bar(chartData);
  const ticksArray = [0, 1, 2, 3];
  chart.yScale().ticks().set(ticksArray);
  chart.container('barChart');
  chart.draw();
  return (
    <div id="barChart" />
  );
}

export default StarList;
