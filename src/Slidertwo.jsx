

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slidertwo = () => {
  return (
    <div>
      {/* <h2>My Awesome Slider</h2> */}
      <AwesomeSlider infinite>
        <div data-src="https://via.placeholder.com/800x400?text=Slide+1" />
        <div data-src="https://via.placeholder.com/800x400?text=Slide+2" />
        <div data-src="https://via.placeholder.com/800x400?text=Slide+3" />
      </AwesomeSlider>
    </div>
  );
};

export default Slidertwo;
