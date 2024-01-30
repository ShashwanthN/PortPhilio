import React, { useRef, useEffect, useState } from 'react';

const GlowingEffect = ({ title, containerStyles, iconRight, type, onClick }) => {
  const buttonRef = useRef(null);
  const [gradientStyle, setGradientStyle] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      // Adjust the color as per your requirement, this is an orange color
      const gradient = `radial-gradient(circle at ${x}% ${y}%, #2c2c2c, #141414  30%)`;
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

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type={type || 'button'}
      className={`inline-flex max-w-custom-2 items-center border-dashed-custom cursor-pointer focus:outline-none ${containerStyles}`}
      style={gradientStyle}
    >
      {title}

      {iconRight && <div className='ml-2'>{iconRight}</div>}
    </button>
  );
};

export default GlowingEffect;
