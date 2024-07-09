'use client';

import React, { useState, useEffect, CSSProperties } from "react";
import { animateScroll } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BackToTop: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    animateScroll.scrollToTop({
      top: 0,
      behavior: "smooth",
      duration: 200
    });
  };

  const buttonStyles: CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '18px',
    zIndex: 1000,
    backgroundColor: '#2A54CA',
    color: '#ffffff',
    border: 'none',
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    opacity: showButton ? 1 : 0,
    transition: 'opacity 0.1s ease',
    borderRadius: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px'
  };

  const iconStyles: CSSProperties = {
    fontSize: '20px'
  };

  return (
    <>
      <style>{`
        .back-to-top:hover {
          background-color: #0F172A !important;
          color: #ffffff !important;
        }
        .back-to-top:focus {
          outline: none;
        }
        .back-to-top:active {
          transform: translateY(1px);
        }
      `}</style>
      <button
        className="back-to-top"
        onClick={handleClick}
        style={buttonStyles}
      >
        <i className="fas fa-arrow-up" style={iconStyles}></i>
      </button>
    </>
  );
};

export default BackToTop;
