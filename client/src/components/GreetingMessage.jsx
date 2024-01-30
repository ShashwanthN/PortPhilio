import React, { useState, useEffect } from 'react';

const GreetingMessage = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good afternoon');
      } else if (currentHour >= 17 && currentHour < 20) {
        setGreeting('Good evening');
      } else {
        setGreeting('Good night');
      }
    };

    // Update greeting initially and then every minute
    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>/.{greeting}./</h1>
      {/* Other content goes here */}
    </div>
  );
};

export default GreetingMessage;
