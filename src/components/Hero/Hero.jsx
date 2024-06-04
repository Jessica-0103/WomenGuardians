import React from 'react';
import './Hero.css';
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        
        {/* left side*/}
        <div className="flexColStart hero-left">

          <div className="hero-title">
            <div className="circle"/>
            <h1>
              Welcome <br/> 
              To The <br/> 
              Safer World!! 
              </h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText"> Learn Self Defence, Handling critical situations, Join workshops, Stories of victims </span>
            <span className="secondaryText"> Forget all difficulties in finding right resources and commmunity for self defence</span>
          </div>

          <div className="flexCenter search-bar">
            <input type="text"/>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp end={100}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Articles & Resources</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={100} end={200} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Workshops & Events</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={150} end={300} duration={4}/>
                <span>+</span>
               </span>
              <span className="secondaryText">Community Members</span>
            </div>
          </div>
        </div>

        {/* right side*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./sw1.jpg" alt="Image Description" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
