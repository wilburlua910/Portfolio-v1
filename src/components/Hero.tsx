import React from "react";
import "./Hero.css";

import HeroImg from "../img/Wilbur.png";
function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-section">
        <section className="Hero-section-title">
          <h1>Hi, my name is</h1>
          <h1>Wilbur Lua</h1>
          <h2>Passionate and driven engineer</h2>
        </section>

        <section className="Hero-section-content">
          <p>
            I'm a Software Engineer with a passion in Full-stack development,
          </p>
          <p> Artificial Intelligence and Internet of Things(IoT)</p>
        </section>

        <button> My GitHub</button>
        <button> My LinkedIn</button>
      </div>

      <div id="Hero-img">
        <img src={HeroImg}></img>
      </div>
    </div>
  );
}

export default Hero;
