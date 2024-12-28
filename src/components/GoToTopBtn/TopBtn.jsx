import React, { useState, useEffect } from 'react';
import './GoToTopButton.css';  // Import the CSS file

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {


    const handleScroll = () => {
      if (window.scrollY > 300) {  // Show button after scrolling 300px
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

  
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`go-to-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i class="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default GoToTopButton;
