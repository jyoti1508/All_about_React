import React from "react";

function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero_content">
        <h1>world lead luxury brands</h1>
        <p>
          Gucci's iconic and foundational tagline is "Quality is remembered long
          after price is forgotten," lasting value of the brand's products.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondry-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="brand-icon">
            <img src="/images/noststrom.png" alt="Logo" />

            <img src="/images/amazon.png" alt="Logo" />
          </div>
        </div>
      </div>
      <div className="hero_img">
        <img src="/images/heroImg.png" alt="Hero_img" />
      </div>
    </main>
  );
}

export default HeroSection;
