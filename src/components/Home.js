import React from 'react';
import RSlider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import img1 from '../images/bg1.jpg';

function Home() {
  return (
    <div id="home">
      <Slider />
      <div className="widget-row">
        <div className="container">
          <div>hello world</div>
          <div>hello world</div>
        </div>
      </div>
    </div>
  );
}

// https://www.npmjs.com/package/react-animated-slider

const slides = [
  { img: img1, text: 'some-text-here' },
  { img: img1, text: 'some-text-here' },
];

function Slider() {
  return (
    <div id="slider">
      <RSlider>
        {slides.map((item, key) => {
          const bg = ` linear-gradient(rgba(0, 0, 0, .35), rgba(0, 0, 0,.35 )), url(${item.img})`;
          return (
            <div className="slider-item" style={{ backgroundImage: bg }} key={key}>
              <h1 className="slider-item-title">Some text in here</h1>
            </div>
          );
        })}
      </RSlider>
    </div>
  );
}

export default Home;
