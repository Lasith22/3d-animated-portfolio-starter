import React from 'react';
import './hero.css';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* title */}
        <h1 className="hTitle">
          Hey There, <br /> <span>I'm Lasith</span>
        </h1>
        {/* awrds */}
        <div className="awards">
          <h2>Top Rated Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam</p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* Scroll svg */}
        <a href="#services"></a>
      </div>
      <div className="hSection right"></div>
    </div>
  );
};

export default Hero;
