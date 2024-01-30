import React, { useRef, useEffect, useState } from 'react';

// Function to darken a color
const darkenColor = (color, percent) => {
  let num = parseInt(color.slice(1), 16);
  let amt = Math.round(2.55 * percent);
  let R = (num >> 16) - amt;
  let B = (num >> 8 & 0x00FF) - amt;
  let G = (num & 0x0000FF) - amt;
  return "#" + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000
      + (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100
      + (G < 255 ? (G < 1 ? 0 : G) : 255)).toString(16).slice(1);
};

const CustomButton = ({ title, containerStyles, iconRight, type, onClick, color, percent }) => {
  const buttonRef = useRef(null);
  const [gradientStyle, setGradientStyle] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      const gradient = `radial-gradient(circle at ${x}% ${y}%, #FFA500, #f16a1f 30%)`;
      setGradientStyle({ background: gradient });
    };

    const handleMouseLeave = () => {
      setGradientStyle(null);
    };

    const buttonElement = buttonRef.current;

    buttonElement.addEventListener('mousemove', handleMouseMove);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      buttonElement.removeEventListener('mousemove', handleMouseMove);
      buttonElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleHover = (event) => {
    if (color) {
      event.target.style.backgroundColor = darkenColor(color, percent);
    }
  };
  
  const handleLeave = (event) => {
    if (color) {
      event.target.style.backgroundColor = color;
    }
  };
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type={type || 'button'}
      className={`inline-flex max-w-custom-2 items-center border-dashed-custom cursor-pointer focus:outline-none ${containerStyles}`}
      style={gradientStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {title}
      {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
