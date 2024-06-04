import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        
        <img src="./23.1.png" alt="logo" width={300} />

          <div className="flexCenter h-menu">
              <a href="">Home</a>
              <a href="">Resources</a>
              <a href="">Events</a>
              <a href="">Community</a>
              <a href="">About Us</a>
             
              <button className="button">
                <a href="">Contact</a>
              </button>
              
            </div>
        
      </div>
    </section>
   
  )
}

export default Header