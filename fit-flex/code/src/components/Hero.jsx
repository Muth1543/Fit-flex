import React from 'react'
import '../styles/Hero.css'
import bgImg from '../assets/bg_img.png'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
       
        <h2>Unleash the Inner <b>Fitness</b> Wizard: Morph Your Bod, <b>Upgrade</b> Your Life Quest!</h2>
        
        <p>Transform your health, achieve your goals, and become the best version of yourself with personalized fitness plans.</p>
        
        <div className="hero-buttons">
          <a href="#search">
            <button className="primary-btn">View More</button>
          </a>
          <a href="#about">
            <button className="secondary-btn">Learn More</button>
          </a>
        </div>
      </div>

    </div>
  )
}


export default Hero