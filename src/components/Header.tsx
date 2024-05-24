import React, { useState, useEffect } from 'react';


function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <header className="header">
      <h1>Header Component</h1>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </header>
  );
}

export default Header;


